import React, { useState } from 'react';
import { Alert, StatusBar } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { useTheme } from 'styled-components';

import ArrowIcon from '../../assets/arrow.svg';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar, DayProps, MarkedDateProps } from '../../components/Calendar';
import { generateInterval } from '../../components/Calendar/generateInterval';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles';
import { formatDate } from '../../utils/formatDate';

import { CarDTO } from '../../dtos/CarDTO';

export interface RentalPeriod {
  startDateFormatted: string;
  endDateFormatted: string;
}

interface RouteProps {
  car: CarDTO;
}

export function Scheduling(): JSX.Element {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps,
  );
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps,
  );

  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod,
  );

  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();

  const { car } = route.params as RouteProps;

  function handleDateChange(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);

    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const lastDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      startDateFormatted: formatDate(firstDate),
      endDateFormatted: formatDate(lastDate),
    });
  }

  function handleConfirmSchedule() {
    if (!rentalPeriod.startDateFormatted || !rentalPeriod.endDateFormatted) {
      Alert.alert('Erro', 'Selecione um preíodo de locação');
      return;
    }

    navigation.navigate('SchedulingDetails', {
      car,
      dates: Object.keys(markedDates),
    });
  }

  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Header>
        <BackButton color={theme.colors.shape} />

        <Title>
          Escolha uma {'\n'}data de início e {'\n'}fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE </DateTitle>
            <DateValue selected={!!rentalPeriod.startDateFormatted}>
              {rentalPeriod.startDateFormatted}
            </DateValue>
          </DateInfo>

          <ArrowIcon />

          <DateInfo>
            <DateTitle>ATÉ </DateTitle>
            <DateValue selected={!!rentalPeriod.endDateFormatted}>
              {rentalPeriod.endDateFormatted}
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleDateChange} />
      </Content>

      <Footer>
        <Button
          enabled={!!rentalPeriod.endDateFormatted}
          onPress={handleConfirmSchedule}
        >
          Confirmar
        </Button>
      </Footer>
    </Container>
  );
}
