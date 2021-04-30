// Función para formatear las fechas según queremos mostrarlas
export const getFormatDate = (date: string): string => {
  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = months[newDate.getMonth()];
  const day = newDate.getDate();

  return `${day} - ${month} - ${year}`;
};
