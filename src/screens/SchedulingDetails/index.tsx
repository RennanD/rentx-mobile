import React from 'react';
import { StatusBar } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';

import { useNavigation } from '@react-navigation/native';

import { Acessory } from '../../components/Acessory';
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
  AcessoryList,
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

import SpeedIcon from '../../assets/speed.svg';
import AccelerationIcon from '../../assets/acceleration.svg';
import ForceIcon from '../../assets/force.svg';
import GasolineIcon from '../../assets/gasoline.svg';
import ExchangeIcon from '../../assets/exchange.svg';
import PeopleIcon from '../../assets/people.svg';
import { Button } from '../../components/Button';

export function SchedulingDetails(): JSX.Element {
  const images = [
    'https://storage.googleapis.com/golden-wind/ignite/react-native/images/1.png',
    'https://storage.googleapis.com/golden-wind/ignite/react-native/images/2.png',
    'https://storage.googleapis.com/golden-wind/ignite/react-native/images/3.png',
  ];

  const theme = useTheme();
  const navigation = useNavigation();

  function handleConfirm() {
    navigation.navigate('ScheduleConfirmation');
  }

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
        <ImagesSlider imagesUrl={images} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>AUDI</Brand>
            <CarName>RS 5 Coupé</CarName>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 120</Price>
          </Rent>
        </Details>

        <AcessoryList>
          <Acessory name="380Km/h" icon={SpeedIcon} />
          <Acessory name="3.2s" icon={AccelerationIcon} />
          <Acessory name="800 HP" icon={ForceIcon} />
          <Acessory name="Gasolina" icon={GasolineIcon} />
          <Acessory name="Automático" icon={ExchangeIcon} />
          <Acessory name="2 pessoas" icon={PeopleIcon} />
        </AcessoryList>

        <RentalPeriod>
          <CalendarIconView>
            <Feather name="calendar" size={24} color={theme.colors.shape} />
          </CalendarIconView>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>

          <Feather name="chevron-right" size={15} color={theme.colors.text} />

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button onPress={handleConfirm} color={theme.colors.success}>
          Alugar agora
        </Button>
      </Footer>
    </Container>
  );
}
