import React from 'react';
import {SafeAreaView as RNSafeAreaView} from 'react-native';

export const SafeAreaView = ({
  children,
  flex,
  padding,
  backgroundColor,
  height,
}: {
  children?: any;
  flex?: number;
  padding?: number;
  height?: number;
  backgroundColor?: string;
}) => {
  return (
    <RNSafeAreaView
      style={{
        flex: flex,
        padding: padding,
        backgroundColor: backgroundColor,
        height: height,
      }}>
      {children}
    </RNSafeAreaView>
  );
};
