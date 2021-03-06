import styled, { css } from 'styled-components/native';
import { FlatList } from 'react-native';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { CarDTO } from '../../dtos/CarDTO';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(15)}px;

  background-color: ${({ theme }) => theme.colors.header};

  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 32px 24px;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_400};
    color: ${theme.colors.text};
  `}
`;

export const CarList = styled(FlatList as new () => FlatList<CarDTO>).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})``;
