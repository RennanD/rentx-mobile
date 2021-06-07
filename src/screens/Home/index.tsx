import React from 'react';
import { StatusBar } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { Container, Header, TotalCars } from './styles';

import Logo from '../../assets/logo.svg';

export function Home(): JSX.Element {
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
    </Container>
  );
}
