import React from 'react';
import { StatusBar } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { Acessory } from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import { ImagesSlider } from '../../components/ImagesSlider';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  CarName,
  Rent,
  Period,
  Price,
  About,
  AcessoryList,
  Footer,
} from './styles';

import { Button } from '../../components/Button';

import { CarDTO } from '../../dtos/CarDTO';

import { getAcessoryIcon } from '../../utils/getAcessoryIcon';

interface RouteProps {
  car: CarDTO;
}

export function CarDetails(): JSX.Element {
  const navigation = useNavigation();
  const route = useRoute();

  const { car } = route.params as RouteProps;

  function handleRentalConfirm() {
    navigation.navigate('Scheduling', {
      car,
    });
  }

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
        <ImagesSlider imagesUrl={car.photos} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <CarName>{car.name}</CarName>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <AcessoryList>
          {car.accessories.map(acessory => (
            <Acessory
              key={acessory.type}
              name={acessory.name}
              icon={getAcessoryIcon(acessory.type)}
            />
          ))}
        </AcessoryList>

        <About>{car.about}</About>
      </Content>
      <Footer>
        <Button onPress={handleRentalConfirm}>Escolhor perído do alugel</Button>
      </Footer>
    </Container>
  );
}
