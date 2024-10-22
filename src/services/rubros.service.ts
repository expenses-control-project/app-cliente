import loadAbort from "../utils/loadAboard.util";
import AxiosPreConfig from "../utils/axios.util";
import { getItem } from "../utils/localStoreMethods";

const axios = AxiosPreConfig;

export const getRubrosRequest = () => {
  const controller = loadAbort();
  const token = getItem("token");
  return {
    call: axios.get("/rubro", { signal: controller.signal, headers: { Authorization: `Bearer ${token}` } }),
    controller,
  };
};