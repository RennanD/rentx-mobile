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

import { CarDTO } from '../../dtos/CarDTO';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

interface CarProps extends RectButtonProps {
  car: CarDTO;
}

export function Car({ car, ...rest }: CarProps): JSX.Element {
  const MotorIcon = getAccessoryIcon(car.fuel_type);

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
            <MotorIcon />
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
