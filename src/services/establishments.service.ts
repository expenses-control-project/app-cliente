import loadAbort from "../utils/loadAboard.util";
import AxiosPreConfig from "../utils/axios.util";

const axios = AxiosPreConfig;

export const getEstablishmentsRequest = () => {
  const controller = loadAbort();
  return {
    call: axios.get("/establecimiento", { signal: controller.signal }),
    controller,
  };
};

export const getEstablishmentRequest = (id: number) => {
  const controller = loadAbort();
  return {
    call: axios.get(`/establecimiento/${id}`, { signal: controller.signal }),
    controller,
  };
};

export const postEstablishmentRequest = (data: any) => {
  const controller = loadAbort();
  return {
    call: axios.post("/establecimiento/", data, { signal: controller.signal }),
    controller,
  };
};

export const patchEstablishmentRequest = (data: any) => {
  const controller = loadAbort();
  return {
    call: axios.patch("/establecimiento/", data, {
      signal: controller.signal,
    }),
    controller,
  };
};

export const deleteEstablishmentRequest = (id: number) => {
  const controller = loadAbort();
  return {
    call: axios.delete(`/establecimiento/${id}`, { signal: controller.signal }),
    controller,
  };
};
