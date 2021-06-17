import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import { useNavigation } from '@react-navigation/native';

import { Container, Header, TotalCars, CarList } from './styles';

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';
import { Loading } from '../../components/Loading';

import api from '../../services/api';

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

  const navigation = useNavigation();

  function handleShowCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', { car });
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

        <TotalCars>
          Total de {cars.length} carro{cars.length === 1 ? '' : 's'}
        </TotalCars>
      </Header>

      {loading ? (
        <Loading />
      ) : (
        <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item: car }) => (
            <Car car={car} onPress={() => handleShowCarDetails(car)} />
          )}
        />
      )}
    </Container>
  );
}
