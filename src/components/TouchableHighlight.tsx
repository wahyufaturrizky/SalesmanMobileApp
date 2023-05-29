import React from 'react';
import {TouchableHighlight as RNTouchableHighlight} from 'react-native';

export const TouchableHighlight = ({
  children,
  disabled,
  onPress,
}: {
  children?: any;
  disabled?: boolean;
  onPress?: () => void;
}) => {
  return (
    <RNTouchableHighlight onPress={onPress} disabled={disabled}>
      {children}
    </RNTouchableHighlight>
  );
};
