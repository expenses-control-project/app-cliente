export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

export const formatDateToDDMMYY = (isoDate: string): string => {
  const date = new Date(isoDate);
  date.setDate(date.getDate() + 1);
  
  // Obtener día, mes y año
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); 
  const year = String(date.getFullYear()).slice(-2);

  return `${day}/${month}/${year}`;
};
