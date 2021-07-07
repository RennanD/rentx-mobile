import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import * as Yup from 'yup';

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
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [driverLicense, setDriverLicense] = useState('');

  const navigation = useNavigation();

  async function handleNextStep() {
    try {
      const schema = Yup.object().shape({
        driverLicense: Yup.string().required('CNH obrigatório'),
        email: Yup.string()
          .email('E-mail inválido')
          .required('E-mail obrigatório'),
        name: Yup.string().required('Nome obrigatório'),
      });

      await schema.validate({ email, name, driverLicense });
      navigation.navigate('SecondStep', {
        user: { email, name, driverLicense },
      });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert('Erro', error.message);
        return;
      }

      Alert.alert('Erro', 'Não foi possível realizar o cadastro');
    }
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
              value={name}
              onChangeText={setName}
              icon="user"
              placeholder="Nome"
              autoCapitalize="words"
              autoCorrect={false}
            />
            <InputText
              value={email}
              onChangeText={setEmail}
              icon="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <InputText
              value={driverLicense}
              onChangeText={setDriverLicense}
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
