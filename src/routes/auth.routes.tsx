import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { FirstStep } from '../screens/SignUp/steps/FirstStep';
import { SecondStep } from '../screens/SignUp/steps/SecondStep';
import { Confirmation } from '../screens/Confirmation';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes(): JSX.Element {
  return (
    <Navigator headerMode="none">
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={FirstStep} />
      <Screen name="SecondStep" component={SecondStep} />
      <Screen name="Confirmation" component={Confirmation} />
    </Navigator>
  );
}
