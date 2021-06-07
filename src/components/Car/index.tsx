import React from 'react';

import {
  Container,
  Details,
  Brand,
  CarName,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from './styles';

import Gasoline from '../../assets/gasoline.svg';

interface CardData {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
}

interface CarProps {
  car: CardData;
}

export function Car({ car }: CarProps): JSX.Element {
  return (
    <Container>
      <Details>
        <Brand>{car.brand}</Brand>
        <CarName>{car.name}</CarName>
        <About>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
          <Type>
            <Gasoline />
          </Type>
        </About>
      </Details>

      <CarImage
        source={{
          uri: car.thumbnail,
        }}
        resizeMode="contain"
      />
    </Container>
  );
}
