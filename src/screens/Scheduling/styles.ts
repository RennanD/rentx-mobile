import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface DateValueProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(46)}px;

  background-color: ${({ theme }) => theme.colors.header};

  justify-content: center;

  padding: 25px;
  padding-top: ${getStatusBarHeight() + 30}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(34)}px;
  margin-top: 24px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_600};
    color: ${theme.colors.shape};
  `}
`;

export const RentalPeriod = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 32px 0;
`;

export const DateInfo = styled.View`
  width: 30%;
`;

export const DateTitle = styled.Text`
  font-size: ${RFValue(10)}px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.text};
  `}
`;

export const DateValue = styled.Text<DateValueProps>`
  font-size: ${RFValue(15)}px;

  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.shape};
  `}

  ${({ theme, selected }) =>
    !selected &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: ${theme.colors.text};
      padding-bottom: 5px;
    `}
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyles: {
    paddingBottom: 24,
  },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const Footer = styled.View`
  padding: 24px;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;
