import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  padding: 0 24px;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  padding-top: ${getStatusBarHeight() + 31}px;
`;

export const StepsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(40)}px;
  margin-top: 60px;
  margin-bottom: 16px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_600};
    color: ${theme.colors.title};
  `}
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(25)}px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_400};
    color: ${theme.colors.text};
  `}
`;

export const Form = styled.View`
  width: 100%;
  margin-top: 64px;
  margin-bottom: 16px;
`;

export const FormStepTitle = styled.Text`
  font-size: ${RFValue(20)}px;

  margin-bottom: 24px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.title};
  `}
`;
