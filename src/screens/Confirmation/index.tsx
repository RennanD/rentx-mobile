import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { Container, Content, Title, Message, Footer } from './styles';

import BrandSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import { ConfirmButton } from '../../components/ConfirmButton';

type RouteParams = {
  title: string;
  subtitle: string;
  nextRoute: string;
};

export function Confirmation(): JSX.Element {
  const { width } = useWindowDimensions();

  const navigation = useNavigation();
  const route = useRoute();

  const { title, subtitle, nextRoute } = route.params as RouteParams;

  function handleConfirm() {
    navigation.navigate(nextRoute);
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
        <Title>{title}</Title>
        <Message>{subtitle}</Message>
      </Content>

      <Footer>
        <ConfirmButton onPress={handleConfirm}>OK</ConfirmButton>
      </Footer>
    </Container>
  );
}
