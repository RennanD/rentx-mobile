import React, { useEffect, useState } from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import { useNavigation } from '@react-navigation/native';

import { Container, Header, TotalCars, CarList } from './styles';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

import api from '../../service/api';

import { CarDTO } from '../../dtos/CarDTO';

export function Home(): JSX.Element {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      api.get('/cars').then(response => {
        setCars(response.data);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

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

      {loading ? (
        <ActivityIndicator />
      ) : (
        <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={() => <Car car={car} onPress={handleNavigation} />}
        />
      )}
    </Container>
  );
}
