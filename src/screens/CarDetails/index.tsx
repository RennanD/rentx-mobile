import React from 'react';
import { StatusBar } from 'react-native';

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
  About,
  AcessoryList,
  Footer,
} from './styles';

import SpeedIcon from '../../assets/speed.svg';
import AccelerationIcon from '../../assets/acceleration.svg';
import ForceIcon from '../../assets/force.svg';
import GasolineIcon from '../../assets/gasoline.svg';
import ExchangeIcon from '../../assets/exchange.svg';
import PeopleIcon from '../../assets/people.svg';
import { Button } from '../../components/Button';

export function CarDetails(): JSX.Element {
  const images = [
    'https://storage.googleapis.com/golden-wind/ignite/react-native/images/1.png',
    'https://storage.googleapis.com/golden-wind/ignite/react-native/images/2.png',
    'https://storage.googleapis.com/golden-wind/ignite/react-native/images/3.png',
  ];

  const navigation = useNavigation();

  function handleRentalConfirm() {
    navigation.navigate('Scheduling');
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

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>
      </Content>
      <Footer>
        <Button onPress={handleRentalConfirm}>Escolhor perído do alugel</Button>
      </Footer>
    </Container>
  );
}
