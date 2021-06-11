import { eachDayOfInterval, format } from 'date-fns';

import { MarkedDateProps, DayProps } from '.';

import { getPlatformDate } from '../../utils/getPlatformDate';

import theme from '../../styles/theme';

export function generateInterval(
  startDate: DayProps,
  endDate: DayProps,
): MarkedDateProps {
  let interval: MarkedDateProps = {};

  eachDayOfInterval({
    start: new Date(startDate.timestamp),
    end: new Date(endDate.timestamp),
  }).forEach(dateItem => {
    const date = format(getPlatformDate(dateItem), 'yyyy-MM-dd');
    interval = {
      ...interval,
      [date]: {
        color:
          startDate.dateString === date || endDate.dateString === date
            ? theme.colors.main
            : theme.colors.main_light,
        textColor:
          startDate.dateString === date || endDate.dateString === date
            ? theme.colors.main_light
            : theme.colors.main,
      },
    };
  });

  return interval;
}
