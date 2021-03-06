import styled, { css } from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  width: 100%;
  height: ${RFValue(126)}px;

  background-color: ${({ theme }) => theme.colors.background_secondary};

  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  padding: 24px;
  margin-bottom: 16px;
`;

export const Details = styled.View``;

export const Brand = styled.Text`
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;

  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.text_detail};
  `}
`;

export const CarName = styled.Text`
  font-size: ${RFValue(15)}px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.title};
  `}
`;

export const About = styled.View`
  flex-direction: row;

  align-items: center;

  margin-top: 16px;
`;

export const Rent = styled.View`
  margin-right: 24px;
`;

export const Period = styled.Text`
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;

  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.text_detail};
  `}
`;

export const Price = styled.Text`
  font-size: ${RFValue(15)}px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.main};
  `}
`;

export const Type = styled.View``;

export const CarImage = styled.Image`
  width: ${RFValue(167)}px;
  height: ${RFValue(85)}px;
`;
