import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { SvgProps } from 'react-native-svg';

import { Container, AcessoryName } from './styles';

interface AccessoryProps {
  name: string;
  icon: React.FC<SvgProps>;
}

export function Accessory({ name, icon: Icon }: AccessoryProps): JSX.Element {
  return (
    <Container>
      <Icon width={RFValue(32)} height={RFValue(32)} />
      <AcessoryName>{name}</AcessoryName>
    </Container>
  );
}
