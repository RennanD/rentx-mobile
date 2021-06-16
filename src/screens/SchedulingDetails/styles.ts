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

  margin-top: ${getStatusBarHeight() + 18}px;

  margin-left: 24px;
`;

export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 24,
    alignItems: 'center',
  },
})``;

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

export const AccessoryList = styled.View`
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

export const RentalPeriod = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 40px;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};

  padding-bottom: 16px;
  margin-bottom: 16px;
`;

export const CalendarIconView = styled.View`
  width: 48px;
  height: 46px;

  background-color: ${({ theme }) => theme.colors.main};

  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const DateInfo = styled.View``;

export const DateTitle = styled.Text`
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;

  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    color: ${theme.colors.text_detail};
  `}
`;

export const DateValue = styled.Text`
  font-size: ${RFValue(15)}px;

  text-transform: uppercase;

  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    color: ${theme.colors.title};
  `}
`;

export const RentalPrice = styled.View`
  width: 100%;

  margin-top: 16px;
`;

export const RentalPriceLabel = styled.Text`
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;

  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    color: ${theme.colors.text_detail};
  `}
`;

export const RentalPriceDetails = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RentalPriceQuota = styled.Text`
  font-size: ${RFValue(15)}px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    color: ${theme.colors.title};
  `}
`;

export const RentalPriceTotal = styled.Text`
  font-size: ${RFValue(24)}px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.success};
  `}
`;
