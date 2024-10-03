import loadAbort from "../utils/loadAboard.util";
import AxiosPreConfig from "../utils/axios.util";

const axios = AxiosPreConfig;

export const getRevenuesRequest = () => {
  const controller = loadAbort();
  return {
    call: axios.get("/ingreso", { signal: controller.signal }),
    controller,
  };
};

export const getRevenueRequest = (id: number) => {
  const controller = loadAbort();
  return {
    call: axios.get(`/ingreso/${id}`, { signal: controller.signal }),
    controller,
  };
};

export const postRevenueRequest = (data: any) => {
  const controller = loadAbort();
  return {
    call: axios.post("/ingreso/", data, { signal: controller.signal }),
    controller,
  };
};

export const putRevenueRequest = (id: number, data: any) => {
  const controller = loadAbort();
  return {
    call: axios.put(`/ingreso/${id}`, data, {
      signal: controller.signal,
    }),
    controller,
  };
};

export const deleteRevenueRequest = (id: number) => {
  const controller = loadAbort();
  return {
    call: axios.delete(`/ingreso/${id}`, { signal: controller.signal }),
    controller,
  };
};
