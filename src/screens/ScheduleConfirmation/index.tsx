import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Container, Content, Title, Message, Footer } from './styles';

import BrandSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import { ConfirmButton } from '../../components/ConfirmButton';

export function ScheduleConfirmation(): JSX.Element {
  const { width } = useWindowDimensions();

  const navigation = useNavigation();

  function handleConfirm() {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <BrandSvg width={width} />
      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado</Title>
        <Message>
          Agora você só precisa ir{'\n'}até a concessionária da RENTX{'\n'}pegar
          o seu automóvel.
        </Message>
      </Content>

      <Footer>
        <ConfirmButton onPress={handleConfirm}>OK</ConfirmButton>
      </Footer>
    </Container>
  );
}