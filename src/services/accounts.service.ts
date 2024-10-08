import loadAbort from "../utils/loadAboard.util";
import AxiosPreConfig from "../utils/axios.util";

const axios = AxiosPreConfig;

export const getAccountsRequest = () => {
  const controller = loadAbort();
  return {
    call: axios.get("/cuenta", { signal: controller.signal }),
    controller,
  };
};

export const getAccountRequest = (id: number) => {
  const controller = loadAbort();
  return {
    call: axios.get(`/cuenta/${id}`, { signal: controller.signal }),
    controller,
  };
};

export const postAccountRequest = (data: any) => {
  const controller = loadAbort();
  return {
    call: axios.post("/cuenta/", data, { signal: controller.signal }),
    controller,
  };
};

export const patchAccountRequest = (data: any) => {
  const controller = loadAbort();
  return {
    call: axios.patch("/cuenta/", data, {
      signal: controller.signal,
    }),
    controller,
  };
};

export const deleteAccountRequest = (id: number) => {
  const controller = loadAbort();
  return {
    call: axios.delete(`/establecimiento/${id}`, { signal: controller.signal }),
    controller,
  };
};
