import React from 'react';
import {Text as RNText} from 'react-native';
import {
  FontWeightInterface,
  TextAlignInterface,
  TextTransformInterface,
} from '../interface/common.interface';

export const Text = ({
  fontSize,
  textAlign,
  fontWeight,
  label,
  color,
  marginBottom,
  marginVertical,
  textTransform,
  marginTop,
  marginLeft,
  marginRight,
}: {
  fontSize?: number;
  textAlign?: TextAlignInterface;
  fontWeight?: FontWeightInterface;
  label?: string | number;
  color?: string;
  marginBottom?: number;
  marginRight?: number;
  marginTop?: number;
  marginLeft?: number;
  marginVertical?: number;
  textTransform?: TextTransformInterface;
}) => {
  return (
    <RNText
      style={{
        color: color,
        fontSize: fontSize,
        textAlign: textAlign,
        fontWeight: fontWeight,
        marginBottom: marginBottom,
        marginVertical: marginVertical,
        textTransform: textTransform,
        marginTop: marginTop,
        marginLeft: marginLeft,
        marginRight: marginRight,
      }}>
      {label}
    </RNText>
  );
};
