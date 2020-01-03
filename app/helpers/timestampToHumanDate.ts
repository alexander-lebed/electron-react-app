import * as moment from 'moment';

// returns human readable time/date comparable to the current time
export default function timestampToHumanDate(timestamp: number): string {
  let time;
  const now = moment();
  const anotherYear = now.format('YYYY') !== moment(timestamp).format('YYYY');
  const anotherDate = now.format('D MMM') !== moment(timestamp).format('D MMM');
  if (anotherYear) {
    time = moment(timestamp).format(`D MMM YYYY[,] HH:mm`);
  } else if (anotherDate) {
    const dateTime = `D MMM[,] HH:mm`;
    time = moment(timestamp).calendar(null, {
      sameDay: '[today,] HH:mm',
      nextWeek: dateTime,
      lastDay: '[yesterday,] HH:mm',
      lastWeek: dateTime,
      sameElse: dateTime
    });
  } else {
    time = moment(timestamp).from(now);
  }
  return time;
}
