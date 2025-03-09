export function formatDate(date_: string): string {
  const date: Date = new Date(date_);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export function daysFromDate(IsoDate: string): number {
  const date: Date = new Date(IsoDate);
  const today: Date = new Date();

  // Calcula la diferencia en milisegundos
  const diffInMs = today.getTime() - date.getTime();

  // Convierte la diferencia de milisegundos a días
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  return diffInDays;
}
