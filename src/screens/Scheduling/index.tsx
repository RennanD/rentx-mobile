import React from 'react';
import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useTheme } from 'styled-components';

import ArrowIcon from '../../assets/arrow.svg';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles';

export function Scheduling(): JSX.Element {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleConfirmSchedule() {
    navigation.navigate('SchedulingDetails');
  }

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
          Escolha uma {'\n'}data de início e {'\n'}fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE </DateTitle>
            <DateValue selected={false} />
          </DateInfo>

          <ArrowIcon />

          <DateInfo>
            <DateTitle>ATÉ </DateTitle>
            <DateValue selected={false} />
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button onPress={handleConfirmSchedule}>Confirmar</Button>
      </Footer>
    </Container>
  );
}
