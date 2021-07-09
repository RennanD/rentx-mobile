import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useAuth } from '../hooks/auth';

import { AppStackRoutes } from './app.stack.routes';
import { AuthRoutes } from './auth.routes';

export function Routes(): JSX.Element {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? <AppStackRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
