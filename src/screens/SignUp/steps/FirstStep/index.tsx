import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  StepsContainer,
  Title,
  SubTitle,
  Form,
  FormStepTitle,
} from '../../styles';

import { BackButton } from '../../../../components/BackButton';
import { Bullet } from '../../../../components/Bullet';
import { Button } from '../../../../components/Button';
import { InputText } from '../../../../components/Forms/InputText';

export function FirstStep(): JSX.Element {
  const navigation = useNavigation();

  function handleNextStep() {
    navigation.navigate('SecondStep');
  }

  function handleCloseKeyboard() {
    Keyboard.dismiss();
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={handleCloseKeyboard}>
        <Container>
          <Header>
            <BackButton />
            <StepsContainer>
              <Bullet active />
              <Bullet />
            </StepsContainer>
          </Header>

          <Title>Crie sua{'\n'}conta</Title>
          <SubTitle>Faça seu cadastro de{'\n'}forma rápida e fácil</SubTitle>

          <Form>
            <FormStepTitle>1. Dados</FormStepTitle>

            <InputText
              icon="user"
              placeholder="Nome"
              autoCapitalize="words"
              autoCorrect={false}
            />
            <InputText
              icon="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <InputText
              icon="credit-card"
              placeholder="CNH"
              autoCorrect={false}
              keyboardType="numeric"
            />
          </Form>

          <Button onPress={handleNextStep}>Próximo</Button>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
