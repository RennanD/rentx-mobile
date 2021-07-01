import React from 'react';
import { StyleSheet } from 'react-native';

import {
  RectButtonProps,
  RectButton,
  PanGestureHandler,
} from 'react-native-gesture-handler';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';

import { useTheme } from 'styled-components';

import { Ionicons } from '@expo/vector-icons';

import { RFValue } from 'react-native-responsive-fontsize';

type FloatButtonProps = RectButtonProps;

type ContextPostion = {
  positionInX: number;
  positionInY: number;
};

const AnimatedButton = Animated.createAnimatedComponent(RectButton);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 13,
    right: 22,
  },
  button: {
    height: RFValue(50),
    width: RFValue(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RFValue(25),
  },
});

export function FloatButton({ ...rest }: FloatButtonProps): JSX.Element {
  const theme = useTheme();

  const positionInX = useSharedValue(0);
  const positionInY = useSharedValue(0);

  const animatedButtonStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: positionInX.value },
      { translateY: positionInY.value },
    ],
  }));

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, context: ContextPostion) {
      context.positionInX = positionInX.value;
      context.positionInY = positionInY.value;
    },
    onActive(event, context: ContextPostion) {
      positionInX.value = context.positionInX + event.translationX;
      positionInY.value = context.positionInY + event.translationY;
    },
    onEnd() {
      positionInX.value = withSpring(0);
      positionInY.value = withSpring(0);
    },
  });

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={[animatedButtonStyle, styles.container]}>
        <AnimatedButton
          style={[styles.button, { backgroundColor: theme.colors.main }]}
          {...rest}
        >
          <Ionicons
            name="ios-car-sport"
            size={32}
            color={theme.colors.background_secondary}
          />
        </AnimatedButton>
      </Animated.View>
    </PanGestureHandler>
  );
}
