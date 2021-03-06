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
  signOut: () => Promise<void>;
  updateUser: (user: User) => Promise<void>;
  updateAvatar: (id: string, avatar: string) => Promise<void>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [authData, setAuthData] = useState<User>({} as User);

  async function handleSignIn({ email, password }: SignInCredentials) {
    try {
      let id_watermelon = '';
      const response = await api.post('/sessions', {
        email,
        password,
      });

      const { token, user } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;

      const userCollection = database.get<UserModel>('users');

      await database.action(async () => {
        await userCollection.create(newUser => {
          newUser.user_id = user.id;
          newUser.email = user.email;
          newUser.name = user.name;
          newUser.driver_license = user.driver_license;
          newUser.avatar = user.avatar;
          newUser.token = token;

          id_watermelon = newUser.id;
        });
      });

      setAuthData({
        ...user,
        id: id_watermelon,
        token,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async function handleSignOut() {
    try {
      const userCollection = database.get<UserModel>('users');

      await database.action(async () => {
        const userSelected = await userCollection.find(authData.id);

        await userSelected.destroyPermanently();
      });

      setAuthData({} as User);
    } catch (error) {
      throw new Error(error);
    }
  }

  async function handleUpdateUser(user: User) {
    try {
      const userCollection = database.get<UserModel>('users');
      await database.action(async () => {
        const userSelected = await userCollection.find(user.id);
        await userSelected.update(userData => {
          userData.name = user.name;
          userData.driver_license = user.driver_license;
          userData.name = user.name;
        });
      });

      setAuthData(user);
    } catch (error) {
      throw new Error(error);
    }
  }

  async function handleUpdateAvatar(id: string, avatar: string) {
    try {
      const userCollection = database.get<UserModel>('users');
      await database.action(async () => {
        const userSelected = await userCollection.find(id);
        await userSelected.update(userData => {
          userData.avatar = avatar;
        });
      });

      setAuthData(oldState => ({ ...oldState, avatar }));
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
    <AuthContext.Provider
      value={{
        user: authData,
        signIn: handleSignIn,
        signOut: handleSignOut,
        updateUser: handleUpdateUser,
        updateAvatar: handleUpdateAvatar,
      }}
    >
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
