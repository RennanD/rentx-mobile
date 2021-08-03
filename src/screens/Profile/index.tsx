import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

import * as ImagePiker from 'expo-image-picker';

import * as Yup from 'yup';

import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';

import {
  Container,
  Header,
  HeaderTop,
  HeaderTitle,
  LogOutButton,
  PhotoContainer,
  Photo,
  PhotoChangeButton,
  Content,
  OptionsContainer,
  Option,
  OptionLabel,
  Section,
} from './styles';

import { BackButton } from '../../components/BackButton';
import { InputText } from '../../components/Forms/InputText';
import { InputPassword } from '../../components/Forms/InputPassword';

import { useAuth } from '../../hooks/auth';
import { Button } from '../../components/Button';

type TabProps = 'userData' | 'passwordData';

export function Profile(): JSX.Element {
  const { user, signOut, updateUser, updateAvatar } = useAuth();

  const [activeTab, setActiveTab] = useState<TabProps>('userData');
  const [avatar, setAvatar] = useState(user.avatar);
  const [name, setName] = useState(user.name);
  const [driverLicense, setDriverLicense] = useState(user.driver_license);

  const [loading, setLoading] = useState(false);

  const theme = useTheme();

  function handleChangeActiveTab(activeTabOption: TabProps) {
    setActiveTab(activeTabOption);
  }

  async function handleSelectAvatar() {
    const result = await ImagePiker.launchImageLibraryAsync({
      mediaTypes: ImagePiker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (result.cancelled) return;

    if (result.uri) {
      setAvatar(result.uri);
      await updateAvatar(user.id, result.uri);
    }
  }

  function handleSignOut() {
    Alert.alert('Atenção', 'Deseja realmente sair da aplicação?', [
      {
        text: 'Cancelar',
        style: 'destructive',
      },
      {
        onPress: signOut,
        text: 'Sim',
        style: 'default',
      },
    ]);
  }

  async function handleProfileUpdate() {
    setLoading(true);
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório.'),
        driverLicense: Yup.number().required('CNH obrigatória'),
      });

      await schema.validate({ name, driverLicense });

      await updateUser({
        ...user,
        name,
        driver_license: driverLicense,
      });
      setLoading(false);
      Alert.alert('Oba!', 'Perfil atualizado com sucesso 🎉');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Erro', error.message);
      } else {
        Alert.alert('Erro', 'Não foi possível atualizar o perfil');
      }
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <HeaderTop>
              <BackButton color={theme.colors.shape} />

              <HeaderTitle>Editar Perfil</HeaderTitle>

              <LogOutButton onPress={handleSignOut}>
                <Feather name="power" color={theme.colors.shape} size={24} />
              </LogOutButton>
            </HeaderTop>

            <PhotoContainer>
              <Photo
                source={{
                  uri:
                    avatar ||
                    'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
                }}
              />

              <PhotoChangeButton onPress={handleSelectAvatar}>
                <Feather name="camera" size={24} color={theme.colors.shape} />
              </PhotoChangeButton>
            </PhotoContainer>
          </Header>

          <Content>
            <OptionsContainer>
              <Option
                onPress={() => handleChangeActiveTab('userData')}
                isActive={activeTab === 'userData'}
              >
                <OptionLabel isActive={activeTab === 'userData'}>
                  Dados
                </OptionLabel>
              </Option>

              <Option
                onPress={() => handleChangeActiveTab('passwordData')}
                isActive={activeTab === 'passwordData'}
              >
                <OptionLabel isActive={activeTab === 'passwordData'}>
                  Trocar senha
                </OptionLabel>
              </Option>
            </OptionsContainer>

            {activeTab === 'userData' ? (
              <Section>
                <InputText
                  defaultValue={name}
                  value={name}
                  onChangeText={setName}
                  icon="user"
                  placeholder="Nome"
                  autoCorrect={false}
                  autoCapitalize="words"
                />
                <InputText
                  defaultValue={user.email}
                  icon="mail"
                  editable={false}
                  autoCorrect={false}
                />

                <InputText
                  defaultValue={driverLicense}
                  value={driverLicense}
                  onChangeText={setDriverLicense}
                  icon="credit-card"
                  placeholder="CNH"
                  keyboardType="numeric"
                />

                <Button onPress={handleProfileUpdate} loading={loading}>
                  Atualizar
                </Button>
              </Section>
            ) : (
              <Section>
                <InputPassword
                  defaultValue="*****************"
                  icon="lock"
                  placeholder="Senha atual"
                />

                <InputPassword icon="lock" placeholder="Nova senha" />

                <InputPassword icon="lock" placeholder="Nova senha" />
              </Section>
            )}
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
