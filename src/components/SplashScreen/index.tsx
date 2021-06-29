import React from 'react';
import { StatusBar, StyleSheet, Dimensions } from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

import { Container } from './styles';

import { Button } from '../Button';

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
});

export function SplashScreen(): JSX.Element {
  const animation = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(animation.value, {
          duration: 500,
          easing: Easing.ease,
        }),
      },
    ],
  }));

  function handleChangeAnimationPosition() {
    animation.value = Math.random() * (WIDTH - 100);
  }

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <Container>
        <Animated.View style={[styles.box, animatedStyles]} />

        <Button onPress={handleChangeAnimationPosition}>mover</Button>
      </Container>
    </>
  );
}
