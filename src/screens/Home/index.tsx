import React from 'react';
import { StatusBar } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { Container, Header, TotalCars } from './styles';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

export function Home(): JSX.Element {
  const car = {
    brand: 'audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'ao dia',
      price: 120,
    },
    thumbnail:
      'https://lh3.googleusercontent.com/proxy/2zbUc1g5ojWGdKsdFUjGH8Ox_HlUeq6f36yfRVwnh8zYvFkZNC_gNFW9W9b2tXufzfB9iywo4rr3tS3EXEGioJ_xx8cLlLxiJzU_3dEl4Bzua2hAvxDthvvoQOzC',
  };

  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Header>
        <Logo width={RFValue(108)} height={RFValue(12)} />

        <TotalCars>Total de 12 carros</TotalCars>
      </Header>

      <Car car={car} />
    </Container>
  );
}
