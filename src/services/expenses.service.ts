import loadAbort from "../utils/loadAboard.util";
import AxiosPreConfig from "../utils/axios.util";
import { getItem } from "../utils/localStoreMethods";

const axios = AxiosPreConfig;

export const getExpensesRequest = () => {
  const controller = loadAbort();
  const token = getItem("token");
  return {
    call: axios.get("/gasto", { signal: controller.signal, headers: { Authorization: `Bearer ${token}` } }),
    controller,
  };
};

export const getExpenseRequest = (id: number) => {
  const controller = loadAbort();
  const token = getItem("token");
  return {
    call: axios.get(`/gasto/${id}`, { signal: controller.signal, headers: { Authorization: `Bearer ${token}` } }),
    controller,
  };
};

export const postExpenseRequest = (data: any) => {
  const controller = loadAbort();
  const token = getItem("token");
  return {
    call: axios.post("/gasto/", data, { signal: controller.signal, headers: { Authorization: `Bearer ${token}` } }),
    controller,
  };
};

export const putExpenseRequest = (id: number, data: any) => {
  const controller = loadAbort();
  const token = getItem("token");
  return {
    call: axios.put(`/gasto/${id}`, data, {
      signal: controller.signal,
      headers: { Authorization: `Bearer ${token}` }
    }),
    controller,
  };
};

export const deleteExpenseRequest = (id: number) => {
  const controller = loadAbort();
  const token = getItem("token");
  return {
    call: axios.delete(`/gasto/${id}`, { signal: controller.signal, headers: { Authorization: `Bearer ${token}` } }),
    controller,
  };
};
