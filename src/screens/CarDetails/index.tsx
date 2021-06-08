import React from 'react';
import { StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { ImagesSlider } from '../../components/ImagesSlider';

import { Container, Header, CarImages } from './styles';

export function CarDetails(): JSX.Element {
  const images = [
    'https://storage.googleapis.com/golden-wind/ignite/react-native/images/1.png',
    'https://storage.googleapis.com/golden-wind/ignite/react-native/images/2.png',
    'https://storage.googleapis.com/golden-wind/ignite/react-native/images/3.png',
  ];

  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Header>
        <BackButton />
      </Header>

      <CarImages>
        <ImagesSlider imagesUrl={images} />
      </CarImages>
    </Container>
  );
}
