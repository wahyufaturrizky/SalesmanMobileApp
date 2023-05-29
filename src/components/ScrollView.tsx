import React from 'react';
import {ScrollView as RNScrollView} from 'react-native';

export const ScrollView = ({
  children,
  flex,
}: {
  children?: any;
  flex?: number;
}) => {
  return <RNScrollView style={{flex: flex}}>{children}</RNScrollView>;
};
