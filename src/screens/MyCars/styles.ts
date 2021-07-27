import styled, { css } from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};

  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(46)}px;

  background-color: ${({ theme }) => theme.colors.header};

  justify-content: center;

  padding: 25px;
  padding-top: ${getStatusBarHeight() + 30}px;
`;

export const BackButtonContainer = styled.View`
  width: 100%;
  align-items: flex-start;
`;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  margin-top: 34px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_600};
    color: ${theme.colors.shape};
  `}
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(15)}px;
  margin-top: 34px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_400};
    color: ${theme.colors.shape};
  `}
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 16px;
`;

export const Appointments = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 24px 0;
`;

export const AppointmentsTitle = styled.Text`
  font-size: ${RFValue(15)}px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_400};
    color: ${theme.colors.text};
  `}
`;

export const AppointmentsQuantity = styled.Text`
  font-size: ${RFValue(15)}px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    color: ${theme.colors.title};
  `}
`;

export const CarWrapper = styled.View`
  margin-bottom: 16px;
`;

export const CarFooter = styled.View`
  width: 100%;
  padding: 12px;

  margin-top: -10px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const CarFooterTitle = styled.Text`
  font-size: ${RFValue(12)}px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.text_detail};
  `}
`;

export const CarFooterPeriod = styled.View`
  flex-direction: row;
`;

export const CarFooterDate = styled.Text`
  font-size: ${RFValue(13)}px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_400};
    color: ${theme.colors.text_detail};
  `}
`;
