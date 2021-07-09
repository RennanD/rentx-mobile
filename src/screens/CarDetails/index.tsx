import React from 'react';
import { StatusBar } from 'react-native';

import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { useNavigation, useRoute } from '@react-navigation/native';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImagesSlider } from '../../components/ImagesSlider';

import {
  Container,
  Header,
  CarImages,
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

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

interface RouteProps {
  car: CarDTO;
}

export function CarDetails(): JSX.Element {
  const scrollInYAnimation = useSharedValue(0);

  const animatedHeaderStyle = useAnimatedStyle(() => ({
    height: interpolate(
      scrollInYAnimation.value,
      [0, 220],
      [220, 85],
      Extrapolate.CLAMP,
    ),
  }));

  const slideCarsStyleAnimation = useAnimatedStyle(() => ({
    opacity: interpolate(
      scrollInYAnimation.value,
      [0, 120],
      [1, 0],
      Extrapolate.CLAMP,
    ),
  }));

  const scrollInYHandler = useAnimatedScrollHandler(event => {
    scrollInYAnimation.value = event.contentOffset.y;
  });

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

      <Animated.View style={[animatedHeaderStyle]}>
        <Header>
          <BackButton />
        </Header>

        <Animated.View style={slideCarsStyleAnimation}>
          <CarImages>
            <ImagesSlider images={car.photos} />
          </CarImages>
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollInYHandler}
        scrollEventThrottle={16}
      >
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <CarName>{car.name}</CarName>
          </Description>

          <Rent>
            <Period>{car.period}</Period>
            <Price>R$ {car.price}</Price>
          </Rent>
        </Details>

        <AcessoryList>
          {car.accessories.map(accessory => (
            <Accessory
              key={accessory.id}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </AcessoryList>

        <About>
          {car.about}
          {car.about}
          {car.about}
          {car.about}
        </About>
      </Animated.ScrollView>
      <Footer>
        <Button onPress={handleRentalConfirm}>Escolhor perído do alugel</Button>
      </Footer>
    </Container>
  );
}
