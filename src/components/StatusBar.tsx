import React from 'react';
import {StatusBar as RNStatusBar} from 'react-native';

export const StatusBar = ({
  barStyle,
  backgroundColor,
}: {
  barStyle?: any;
  backgroundColor?: string;
}) => {
  return <RNStatusBar backgroundColor={backgroundColor} barStyle={barStyle} />;
};
