import React from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';

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
import { CarDTO } from '../../dtos/CarDTO';

interface CarProps extends RectButtonProps {
  car: CarDTO;
}

export function Car({ car, ...rest }: CarProps): JSX.Element {
  return (
    <Container {...rest}>
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
