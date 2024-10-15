import loadAbort from "../utils/loadAboard.util";
import AxiosPreConfig from "../utils/axios.util";

const axios = AxiosPreConfig;

export const registerUser = (data: any) => {
  const controller = loadAbort();
  return {
    call: axios.post("/usuario", data, { signal: controller.signal }),
    controller,
  };
};

export const login = (data: any) => {
  const controller = loadAbort();
  return {
    call: axios.post("/auth/login", data, { signal: controller.signal }),
    controller,
  };
};
