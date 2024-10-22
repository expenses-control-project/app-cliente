export const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };

export function formatterTodayDate () {
  const fecha_actual = new Date();

  const year = fecha_actual.getFullYear();
  const month = String(fecha_actual.getMonth() + 1).padStart(2, '0');
  const day = String(fecha_actual.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}