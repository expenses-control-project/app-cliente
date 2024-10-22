import loadAbort from "../utils/loadAboard.util";
import AxiosPreConfig from "../utils/axios.util";
import { getItem } from "../utils/localStoreMethods";

const axios = AxiosPreConfig;

export const getEstablishmentsRequest = () => {
  const controller = loadAbort();
  const token = getItem("token");
  return {
    call: axios.get("/establecimiento", {
      signal: controller.signal,
      headers: {"expenses-control-jwt": `${token}` },
    }),
    controller,
  };
};

export const getEstablishmentRequest = (id: number) => {
  const controller = loadAbort();
  const token = getItem("token");
  return {
    call: axios.get(`/establecimiento/${id}`, {
      signal: controller.signal,
      headers: {"expenses-control-jwt": `${token}` },
    }),
    controller,
  };
};

export const postEstablishmentRequest = (data: any) => {
  const controller = loadAbort();
  const token = getItem("token");
  return {
    call: axios.post("/establecimiento/", data, {
      signal: controller.signal,
      headers: {"expenses-control-jwt": `${token}` },
    }),
    controller,
  };
};

export const patchEstablishmentRequest = (data: any) => {
  const controller = loadAbort();
  const token = getItem("token");
  return {
    call: axios.patch("/establecimiento/", data, {
      signal: controller.signal,
      headers: {"expenses-control-jwt": `${token}` },
    }),
    controller,
  };
};

export const deleteEstablishmentRequest = (id: number) => {
  const controller = loadAbort();
  const token = getItem("token");
  return {
    call: axios.delete(`/establecimiento/${id}`, {
      signal: controller.signal,
      headers: {"expenses-control-jwt": `${token}` },
    }),
    controller,
  };
};
