import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';

import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

import { Container } from './styles';

import BrandImage from '../../assets/brand.svg';
import LogoImage from '../../assets/logo.svg';

interface SplashScrennProps {
  onLoadApp: () => void;
}

export function SplashScreen({ onLoadApp }: SplashScrennProps): JSX.Element {
  const splashAnimationValue = useSharedValue(0);

  const brandStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      splashAnimationValue.value,
      [0, 80],
      [1, 0],
      Extrapolate.CLAMP,
    ),
  }));

  const logoStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      splashAnimationValue.value,
      [120, 200],
      [0, 1],
      Extrapolate.CLAMP,
    ),
  }));

  function startApp() {
    onLoadApp();
  }

  useEffect(() => {
    splashAnimationValue.value = withTiming(
      250,
      {
        duration: 2500,
      },
      () => {
        'worklet';

        runOnJS(startApp)();
      },
    );
  }, []);

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <Container>
        <Animated.View style={[brandStyle, { position: 'absolute' }]}>
          <BrandImage width={75} height={45} />
        </Animated.View>

        <Animated.View style={[logoStyle, { position: 'absolute' }]}>
          <LogoImage width={180} height={50} />
        </Animated.View>
      </Container>
    </>
  );
}
