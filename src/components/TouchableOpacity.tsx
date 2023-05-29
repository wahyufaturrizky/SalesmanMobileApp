import React from 'react';
import {TouchableOpacity as RNTouchableOpacity} from 'react-native';

export const TouchableOpacity = ({
  children,
  disabled,
  onPress,
}: {
  children?: any;
  disabled?: boolean;
  onPress?: () => void;
}) => {
  return (
    <RNTouchableOpacity onPress={onPress} disabled={disabled}>
      {children}
    </RNTouchableOpacity>
  );
};
