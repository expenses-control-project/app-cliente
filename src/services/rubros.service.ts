import loadAbort from "../utils/loadAboard.util";
import AxiosPreConfig from "../utils/axios.util";

const axios = AxiosPreConfig;

export const getRubrosRequest = () => {
  const controller = loadAbort();
  return {
    call: axios.get("/rubro", { signal: controller.signal }),
    controller,
  };
};