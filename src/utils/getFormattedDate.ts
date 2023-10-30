import moment from 'moment';
import momentTimezone from 'moment-timezone';

export function formateDate(date: Date): string {
  const dateParts = new Intl.DateTimeFormat('en', { year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(date);
  return `${dateParts[2].value}-${dateParts[0].value}-${dateParts[4].value}`;
}

export const formatGraphXAxis = (tickItem: string | number | Date) => {
  const date = new Date(tickItem);
  return date.toLocaleString('default', { month: 'long' });
};

export const formatDate = (date: any) => {
  return moment(momentTimezone.tz(date, momentTimezone.tz.guess()))
    .format('DDkkmmJMMMYY')
    .toUpperCase();
}

