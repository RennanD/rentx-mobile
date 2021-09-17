import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import { useNavigation } from '@react-navigation/native';
import { useNetInfo } from '@react-native-community/netinfo';
import { synchronize } from '@nozbe/watermelondb/sync';

import { Container, Header, TotalCars, CarList } from './styles';

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';
import { Loading } from '../../components/Loading';

import api from '../../services/api';
import { database } from '../../infra/database';

import { CarDTO } from '../../dtos/CarDTO';

export function Home(): JSX.Element {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const netInfo = useNetInfo();

  async function offlineSyncronize() {
    await synchronize({
      database,
      pullChanges: async ({ lastPulledAt }) => {
        const { data } = await api.get(
          `cars/sync/pull?lastPulledVersion=${lastPulledAt || 0}`,
        );
        const { changes, latedtVersion } = data;

        return { changes, timestamp: latedtVersion };
      },
      pushChanges: async ({ changes }) => {
        console.log(changes);
      },
    });
  }

  useEffect(() => {
    try {
      api.get('/cars').then(response => {
        setCars(response.data);
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
    }
  }, []);

  // useEffect(() => {
  //   if(netInfo.isConnected) {
  //     Alert.
  //   }
  // },[netInfo.isConnected])

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

        {!loading && (
          <TotalCars>
            Total de {cars.length} carro{cars.length === 1 ? '' : 's'}
          </TotalCars>
        )}
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
