import React, { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';

import { useNavigation, useRoute } from '@react-navigation/native';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImagesSlider } from '../../components/ImagesSlider';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  CarName,
  Rent,
  Period,
  Price,
  AccessoryList,
  Footer,
  RentalPeriod,
  CalendarIconView,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';

import { Button } from '../../components/Button';

import api from '../../services/api';

import { CarDTO } from '../../dtos/CarDTO';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

import { formatDate } from '../../utils/formatDate';

interface RentalPeriodProps {
  startDateFormatted: string;
  endDateFormatted: string;
}

interface RouteProps {
  car: CarDTO;
  dates: string[];
}

export function SchedulingDetails(): JSX.Element {
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>(
    {} as RentalPeriodProps,
  );
  const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();

  const { car, dates } = route.params as RouteProps;

  const rentalTotalPrice = Number(dates.length * car.price);

  async function handleConfirmSchedule() {
    setLoading(true);

    const schedulesByCar = await api.get(`schedules_bycars/${car.id}`);

    const unavailable_dates = {
      ...schedulesByCar.data.unavailable_dates,
      ...dates,
    };

    api.post('schedules_byuser', {
      user_id: 1,
      car,
      startDate: formatDate(dates[0]),
      endDate: formatDate(dates[dates.length - 1]),
    });

    api
      .put(`schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates,
      })
      .then(() =>
        navigation.navigate('Confirmation', {
          title: 'Carro Alugado!',
          subtitle: `Agora voc?? s?? precisa ir${'\n'}at?? a concession??ria da RENTX${'\n'}pegar o seu autom??vel.`,
          nextRoute: 'Home',
        }),
      )
      .catch(() => {
        setLoading(false);
        Alert.alert('Erro', 'N??o foi poss??vel carregar o agendamento');
      });
  }

  useEffect(() => {
    setRentalPeriod({
      startDateFormatted: formatDate(dates[0]),
      endDateFormatted: formatDate(dates[dates.length - 1]),
    });
  }, [dates]);

  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Header>
        <BackButton />
      </Header>

      <CarImages>
        <ImagesSlider images={car.photos} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <CarName>{car.name}</CarName>
          </Description>

          <Rent>
            <Period>{car.period}</Period>
            <Price>R$ {car.price}</Price>
          </Rent>
        </Details>

        <AccessoryList>
          {car.accessories.map(accessory => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </AccessoryList>

        <RentalPeriod>
          <CalendarIconView>
            <Feather name="calendar" size={24} color={theme.colors.shape} />
          </CalendarIconView>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.startDateFormatted}</DateValue>
          </DateInfo>

          <Feather name="chevron-right" size={15} color={theme.colors.text} />

          <DateInfo>
            <DateTitle>AT??</DateTitle>
            <DateValue>{rentalPeriod.endDateFormatted}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>
              R$ {car.price} X{dates.length} di??rias
            </RentalPriceQuota>
            <RentalPriceTotal>R$ {rentalTotalPrice}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button
          enabled={!loading}
          loading={loading}
          onPress={handleConfirmSchedule}
          color={theme.colors.success}
        >
          Alugar agora
        </Button>
      </Footer>
    </Container>
  );
}
