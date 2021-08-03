import React, {ReactNode} from 'react';
import {LinearGradient} from 'expo-linear-gradient';

import {theme} from '../../global/styles/theme';
import {styles} from './styles';

type Props = {
  children: ReactNode;
};

export function Background({children}: Props) {
  const {secondary80, secondary100} = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={['#12c2e9', '#c471ed', '#f64f59']}>
      {children}
    </LinearGradient>
  );
}
