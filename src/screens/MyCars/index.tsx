import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { useTheme } from 'styled-components';

import {
  Container,
  Header,
  Title,
  Subtitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
} from './styles';

import { CarDTO } from '../../dtos/CarDTO';
import api from '../../services/api';
import { BackButton } from '../../components/BackButton';
import { Car } from '../../components/Car';
import { Loading } from '../../components/Loading';

interface CarsAppointmenstData {
  user_id: number;
  car: CarDTO;
  startDate: string;
  endDate: string;
}

export function MyCars(): JSX.Element {
  const [cars, setCars] = useState<CarsAppointmenstData[]>([]);
  const [loading, setLoaading] = useState(true);

  const theme = useTheme();

  useEffect(() => {
    api
      .get('schedules_byuser?user_id=1')
      .then(response => {
        const carsArray = response.data.map(
          (schedule: CarsAppointmenstData) => schedule,
        );

        setCars(carsArray);
        setLoaading(false);
      })
      .catch(error => {
        console.log(error);
        setLoaading(false);
      });
  }, []);

  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Header>
        <BackButton color={theme.colors.shape} />

        <Title>
          Seus agendamentos,{'\n'}
          estão aqui.
        </Title>

        <Subtitle>Conforto, segurança e praticidade</Subtitle>
      </Header>

      {loading ? (
        <Loading />
      ) : (
        <Content>
          <Appointments>
            <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
            <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
          </Appointments>

          <FlatList
            data={cars}
            keyExtractor={item => item.car.id}
            showsVerticalScrollIndicator
            renderItem={({ item }) => (
              <CarWrapper>
                <Car car={item.car} />
                <CarFooter>
                  <CarFooterTitle>Período</CarFooterTitle>

                  <CarFooterPeriod>
                    <CarFooterDate>{item.startDate}</CarFooterDate>
                    <AntDesign
                      name="arrowright"
                      size={20}
                      color={theme.colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <CarFooterDate>{item.endDate}</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWrapper>
            )}
          />
        </Content>
      )}
    </Container>
  );
}
