import React from 'react';

import LottieView from 'lottie-react-native';

import { Container } from './styles';

import loadingAnimation from '../../assets/animations/loading.json';

export function Loading(): JSX.Element {
  return (
    <Container>
      <LottieView
        source={loadingAnimation}
        autoPlay
        loop
        style={{
          width: 150,
          height: 150,
        }}
      />
    </Container>
  );
}
