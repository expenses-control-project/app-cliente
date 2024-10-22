import loadAbort from "../utils/loadAboard.util";
import AxiosPreConfig from "../utils/axios.util";
import { getItem } from "../utils/localStoreMethods";

const axios = AxiosPreConfig;

export const getAccountsRequest = () => {
  const controller = loadAbort();
  const token = getItem("token");
  return {
    call: axios.get("/cuenta", {
      signal: controller.signal,
      headers: {"expenses-control-jwt": `${token}` },
    }),
    controller,
  };
};

export const getAccountRequest = (id: number) => {
  const controller = loadAbort();
  const token = getItem("token");
  return {
    call: axios.get(`/cuenta/${id}`, {
      signal: controller.signal,
      headers: {"expenses-control-jwt": `${token}` },
    }),
    controller,
  };
};

export const postAccountRequest = (data: any) => {
  const controller = loadAbort();
  const token = getItem("token");
  return {
    call: axios.post("/cuenta/", data, {
      signal: controller.signal,
      headers: {"expenses-control-jwt": `${token}` },
    }),
    controller,
  };
};

export const patchAccountRequest = (data: any) => {
  const controller = loadAbort();
  const token = getItem("token");
  return {
    call: axios.patch("/cuenta/", data, {
      signal: controller.signal,
      headers: {"expenses-control-jwt": `${token}` },
    }),
    controller,
  };
};

export const deleteAccountRequest = (id: number) => {
  const controller = loadAbort();
  const token = getItem("token");
  return {
    call: axios.delete(`/cuenta/${id}`, {
      signal: controller.signal,
      headers: {"expenses-control-jwt": `${token}` },
    }),
    controller,
  };
};
