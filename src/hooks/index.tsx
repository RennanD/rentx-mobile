import React from 'react';

import { AuthProvider } from './auth';

interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps): JSX.Element {
  return <AuthProvider>{children}</AuthProvider>;
}
