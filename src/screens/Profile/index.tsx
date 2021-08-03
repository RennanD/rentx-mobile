import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useTheme } from 'styled-components';
import { BorderlessButton } from 'react-native-gesture-handler';
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

type TabProps = 'userData' | 'passwordData';

export function Profile(): JSX.Element {
  const [activeTab, setActiveTab] = useState<TabProps>('userData');

  const theme = useTheme();

  const { user } = useAuth();

  function handleChangeActiveTab(activeTabOption: TabProps) {
    setActiveTab(activeTabOption);
  }

  // function handleSignOut() {}

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <HeaderTop>
              <BackButton color={theme.colors.shape} />

              <HeaderTitle>Editar Perfil</HeaderTitle>

              <LogOutButton>
                <Feather name="power" color={theme.colors.shape} size={24} />
              </LogOutButton>
            </HeaderTop>

            <PhotoContainer>
              <Photo
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
                }}
              />

              <PhotoChangeButton>
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
                <BorderlessButton>
                  <OptionLabel isActive={activeTab === 'userData'}>
                    Dados
                  </OptionLabel>
                </BorderlessButton>
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
                  defaultValue={user.name}
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
                  defaultValue={user.driver_license}
                  icon="credit-card"
                  placeholder="CNH"
                  keyboardType="numeric"
                />
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
