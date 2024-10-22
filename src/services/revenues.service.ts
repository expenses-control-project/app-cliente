import loadAbort from "../utils/loadAboard.util";
import AxiosPreConfig from "../utils/axios.util";
import { getItem } from "../utils/localStoreMethods";

const axios = AxiosPreConfig;

export const getRevenuesRequest = () => {
  const controller = loadAbort();
  const token = getItem("token");
  return {
    call: axios.get("/ingreso", {
      signal: controller.signal,
      headers: {"expenses-control-jwt": `${token}` },
    }),
    controller,
  };
};

export const getRevenueRequest = (id: number) => {
  const controller = loadAbort();
  const token = getItem("token");
  return {
    call: axios.get(`/ingreso/${id}`, {
      signal: controller.signal,
      headers: {"expenses-control-jwt": `${token}` },
    }),
    controller,
  };
};

export const postRevenueRequest = (data: any) => {
  const controller = loadAbort();
  const token = getItem("token");
  return {
    call: axios.post("/ingreso/", data, {
      signal: controller.signal,
      headers: {"expenses-control-jwt": `${token}` },
    }),
    controller,
  };
};

export const putRevenueRequest = (id: number, data: any) => {
  const controller = loadAbort();
  const token = getItem("token");
  return {
    call: axios.put(`/ingreso/${id}`, data, {
      signal: controller.signal,
      headers: {"expenses-control-jwt": `${token}` },
    }),
    controller,
  };
};

export const deleteRevenueRequest = (id: number) => {
  const controller = loadAbort();
  const token = getItem("token");
  return {
    call: axios.delete(`/ingreso/${id}`, {
      signal: controller.signal,
      headers: {"expenses-control-jwt": `${token}` },
    }),
    controller,
  };
};
