import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;

  margin-top: ${getStatusBarHeight() + RFValue(115)}px;
`;

export const Form = styled.View`
  width: 100%;

  margin: 64px 0;
`;

export const Title = styled.Text`
  font-size: ${RFValue(40)}px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_600};
    color: ${theme.colors.title};
  `}
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(15)}px;

  line-height: ${RFValue(25)}px;
  margin-top: 16px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_400};
    color: ${theme.colors.text};
  `}
`;

export const Footer = styled.View``;
