import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import { useTheme } from 'styled-components';

import { BackButton } from '../../../../components/BackButton';
import { Bullet } from '../../../../components/Bullet';
import { Button } from '../../../../components/Button';
import { InputPassword } from '../../../../components/Forms/InputPassword';

import {
  Container,
  Header,
  StepsContainer,
  Title,
  SubTitle,
  Form,
  FormStepTitle,
} from '../../styles';

export function SecondStep(): JSX.Element {
  const theme = useTheme();

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
              <Bullet />
              <Bullet active />
            </StepsContainer>
          </Header>

          <Title>Crie sua{'\n'}conta</Title>
          <SubTitle>Faça seu cadastro de{'\n'}forma rápida e fácil</SubTitle>

          <Form>
            <FormStepTitle>2. Credenciais</FormStepTitle>

            <InputPassword icon="lock" placeholder="Senha" />

            <InputPassword icon="lock" placeholder="Confirmar senha" />
          </Form>

          <Button color={theme.colors.success}>Confirmar</Button>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
