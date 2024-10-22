import { useState, useEffect, useRef } from "react";
import { AxiosResponse, AxiosError } from "axios";
import { removeItem } from "../utils/localStoreMethods";

interface AxiosCall<T> {
  call: Promise<AxiosResponse<T>>;
  controller?: AbortController;
}

const useFetchAndLoad = () => {
  const [loading, setLoading] = useState(false);
  const [cancelReason, setCancelReason] = useState<string | null>(null);
  const controllerRef = useRef<AbortController | null>(null);

  const callEndpoint = async (axiosCall: AxiosCall<any>) => {
    // Crear un nuevo controller si no existe uno
    if (!axiosCall.controller) {
      controllerRef.current = new AbortController();
    } else {
      controllerRef.current = axiosCall.controller;
    }

    setLoading(true);
    setCancelReason(null); // Reiniciar la razón de cancelación

    try {
      const result = await axiosCall.call;
      return result;
    } catch (err: any) {
      if (err instanceof AxiosError && err.name === "CanceledError") {
        console.log(`Request canceled due to: ${cancelReason}`);
      } else if (err.response?.status === 401) {
        removeItem("token");
      } else {
        throw err;
      }
    } finally {
      setLoading(false); // Asegurar que loading se desactive
    }
  };

  const cancelEndpoint = (reason: string = "Request canceled by user") => {
    if (controllerRef.current) {
      setCancelReason(reason); // Establecer la razón de la cancelación
      controllerRef.current.abort();
      setLoading(false);
    }
  };

  useEffect(() => {
    // Cancelar la solicitud cuando el componente se desmonta
    return () => {
      cancelEndpoint("Component unmounted");
    };
  }, []);

  return { loading, callEndpoint, cancelEndpoint, cancelReason };
};

export default useFetchAndLoad;
