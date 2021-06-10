import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.header};

  padding-top: 26px;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;

  margin-top: 30px;

  ${({ theme }) => css`
    color: ${theme.colors.shape};
    font-family: ${theme.fonts.primary_600};
  `}
`;

export const Message = styled.Text`
  font-size: ${RFValue(15)}px;
  margin-top: 16px;
  text-align: center;

  line-height: ${RFValue(25)}px;

  ${({ theme }) => css`
    color: ${theme.colors.text_detail};
    font-family: ${theme.fonts.secondary_400};
  `}
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;

  margin: 30px 0;
`;
