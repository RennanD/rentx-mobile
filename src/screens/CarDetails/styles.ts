import styled, { css } from 'styled-components/native';

import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  position: absolute;
  z-index: 5;

  margin-top: ${getStatusBarHeight() + 18}px;

  margin-left: 24px;
`;

export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Details = styled.View`
  width: 100%;

  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  margin-top: 38px;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;

  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.text_detail};
  `}
`;

export const CarName = styled.Text`
  font-size: ${RFValue(25)}px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.title};
  `}
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;

  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.text_detail};
  `}
`;

export const Price = styled.Text`
  font-size: ${RFValue(25)}px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.main};
  `}
`;

export const About = styled.Text`
  font-size: ${RFValue(15)}px;

  text-align: justify;

  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_400};
    color: ${theme.colors.text};
  `}

  margin-top: 23px;

  line-height: ${RFValue(25)}px;
`;

export const AcessoryList = styled.View`
  width: 100%;

  flex-direction: row;
  flex-wrap: wrap;

  align-items: center;
  justify-content: space-between;

  margin-top: 16px;
`;

export const Footer = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.colors.background_secondary};

  padding: 24px 24px ${getBottomSpace() + 24}px;
`;
