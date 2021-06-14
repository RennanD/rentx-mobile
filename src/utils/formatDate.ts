import { format, parseISO } from 'date-fns';

export function formatDate(date: Date | number | string): string {
  let parsedDate;

  if (typeof date === 'string') {
    parsedDate = parseISO(date);
  } else if (typeof date === 'number') {
    parsedDate = new Date(date);
  } else {
    parsedDate = date;
  }

  const formattedDate = format(parsedDate, 'dd/MM/yyyy');

  return formattedDate;
}
