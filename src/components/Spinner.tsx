import React from 'react';
import {ActivityIndicator} from 'react-native';

export const Spinner = ({
  size,
  color,
  marginRight,
}: {
  size?: 'large' | 'small';
  color?: string;
  marginRight?: number;
}) => {
  return (
    <ActivityIndicator
      style={{marginRight: marginRight}}
      size={size}
      color={color}
    />
  );
};
