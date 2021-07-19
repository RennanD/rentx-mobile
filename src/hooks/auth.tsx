import React, { createContext, useContext, useEffect, useState } from 'react';
import { database } from '../infra/database';
import { User as UserModel } from '../infra/database/models/User';

import api from '../services/api';

interface User {
  id: string;
  user_id: string;
  email: string;
  name: string;
  driver_license: string;
  avatar: string;
  token: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn: (credentials: SignInCredentials) => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [authData, setAuthData] = useState<User>({} as User);

  async function handleSignIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('/sessions', {
        email,
        password,
      });

      const { token, user } = response.data;

      const userCollection = database.get<UserModel>('users');
      api.defaults.headers.authorization = `Bearer ${token}`;

      await database.action(async () => {
        await userCollection.create(newUser => {
          newUser.user_id = user.id;
          newUser.email = user.email;
          newUser.name = user.name;
          newUser.driver_license = user.driver_license;
          newUser.avatar = user.avatar || 'png';
          newUser.token = token;
        });
      });

      setAuthData({
        ...user,
        token,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    async function loadStoragedUser() {
      const userCollection = database.get<UserModel>('users');

      const response = await userCollection.query().fetch();

      if (response.length) {
        const storagedUser = response[0]._raw as unknown as User;
        setAuthData(storagedUser);
        api.defaults.headers.authorization = `Bearer ${storagedUser.token}`;
      }
    }
    loadStoragedUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user: authData, signIn: handleSignIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }

  return context;
}
