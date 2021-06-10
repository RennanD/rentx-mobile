import React from 'react';
import { StatusBar } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import { useNavigation } from '@react-navigation/native';

import { Container, Header, TotalCars, CarList } from './styles';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

export function Home(): JSX.Element {
  const car = {
    id: String(1),
    brand: 'audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'ao dia',
      price: 120,
    },
    thumbnail:
      'https://www.audicentersalvador.com.br/assets/uploads/nt_veiculos/34372-74981-imagem-topo-removebg-preview.png?v=1621743521',
  };

  const navigation = useNavigation();

  function handleNavigation() {
    navigation.navigate('CarDetails');
  }

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

      <CarList
        data={['1', '2', '3']}
        keyExtractor={item => String(item)}
        renderItem={() => <Car car={car} onPress={handleNavigation} />}
      />
    </Container>
  );
}
