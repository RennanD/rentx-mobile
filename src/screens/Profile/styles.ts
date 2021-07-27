import styled, { css } from 'styled-components/native';

import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

type OptionProps = {
  isActive: boolean;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(227)}px;
  background-color: ${({ theme }) => theme.colors.header};

  padding: 0 24px;

  align-items: center;
`;

export const HeaderTop = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: ${getStatusBarHeight() + 24}px;
`;

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(25)}px;

  ${({ theme }) => css`
    color: ${theme.colors.background_secondary};
    font-family: ${theme.fonts.primary_600};
  `}
`;

export const LogOutButton = styled(BorderlessButton)``;

export const PhotoContainer = styled.View`
  width: 180px;
  height: 180px;
  border-radius: 90px;

  background-color: ${({ theme }) => theme.colors.shape};

  margin-top: 48px;

  position: relative;
`;

export const Photo = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 90px;
`;

export const PhotoChangeButton = styled(RectButton)`
  height: 40px;
  width: 40px;

  background-color: ${({ theme }) => theme.colors.main};

  align-items: center;
  justify-content: center;

  border-radius: 5px;

  position: absolute;

  bottom: 10px;
  right: 10px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: 122px;
`;

export const OptionsContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};

  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  margin-bottom: 24px;
`;

export const Option = styled.TouchableOpacity<OptionProps>`
  padding-bottom: 14px;

  ${({ theme, isActive }) =>
    isActive &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.main};
    `}
`;

export const OptionLabel = styled.Text<OptionProps>`
  font-size: ${RFValue(20)}px;

  ${({ theme, isActive }) => css`
    color: ${isActive ? theme.colors.title : theme.colors.text_detail};
    font-family: ${isActive
      ? theme.fonts.primary_600
      : theme.fonts.primary_500};
  `}
`;
