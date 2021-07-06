import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  width: 100%;
`;

export const ImageIndexses = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: 24px;
`;

export const CarImageWrapper = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: ${RFValue(132)}px;

  justify-content: center;
  align-items: center;
`;

export const CarImage = styled.Image`
  width: ${RFValue(280)}px;
  height: ${RFValue(132)}px;
`;
