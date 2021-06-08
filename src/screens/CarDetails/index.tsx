import React from 'react';
import { StatusBar } from 'react-native';
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
} from './styles';

export function CarDetails(): JSX.Element {
  const images = [
    'https://storage.googleapis.com/golden-wind/ignite/react-native/images/1.png',
    'https://storage.googleapis.com/golden-wind/ignite/react-native/images/2.png',
    'https://storage.googleapis.com/golden-wind/ignite/react-native/images/3.png',
  ];

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

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>
      </Content>
    </Container>
  );
}
