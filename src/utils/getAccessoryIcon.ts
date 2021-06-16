import React from 'react';
import { SvgProps } from 'react-native-svg';

import SpeedIcon from '../assets/speed.svg';
import AccelerationIcon from '../assets/acceleration.svg';
import ForceIcon from '../assets/force.svg';

import GasolineIcon from '../assets/gasoline.svg';
import EnergyIcon from '../assets/energy.svg';
import HybridIcon from '../assets/hybrid.svg';

import ExchangeIcon from '../assets/exchange.svg';
import PeopleIcon from '../assets/people.svg';

import CarSvg from '../assets/car.svg';

export function getAccessoryIcon(icon: string): React.FC<SvgProps> {
  switch (icon) {
    case 'speed':
      return SpeedIcon;
    case 'acceletation':
      return AccelerationIcon;
    case 'turning_diameter':
      return ForceIcon;
    case 'gasoline_motor':
      return GasolineIcon;

    case 'electric_motor':
      return EnergyIcon;

    case 'hybrid_motor':
      return HybridIcon;

    case 'exchange':
      return ExchangeIcon;
    case 'seats':
      return PeopleIcon;

    default:
      return CarSvg;
  }
}
