import loadAbort from "../utils/loadAboard.util";
import AxiosPreConfig from "../utils/axios.util";

const axios = AxiosPreConfig;

export const getExpensesRequest = () => {
  const controller = loadAbort();
  return {
    call: axios.get("/gasto", { signal: controller.signal }),
    controller,
  };
};

export const getExpenseRequest = (id: number) => {
  const controller = loadAbort();
  return {
    call: axios.get(`/gasto/${id}`, { signal: controller.signal }),
    controller,
  };
};

export const postExpenseRequest = (data: any) => {
  const controller = loadAbort();
  return {
    call: axios.post("/gasto/", data, { signal: controller.signal }),
    controller,
  };
};

export const putExpenseRequest = (id: number, data: any) => {
  const controller = loadAbort();
  return {
    call: axios.put(`/gasto/${id}`, data, {
      signal: controller.signal,
    }),
    controller,
  };
};

export const deleteExpenseRequest = (id: number) => {
  const controller = loadAbort();
  return {
    call: axios.delete(`/gasto/${id}`, { signal: controller.signal }),
    controller,
  };
};
