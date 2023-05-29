import React from 'react';
import {View as RNView} from 'react-native';
import {
  AlignItemsInterface,
  FlexDirectionInterface,
  FlexWrapInterface,
  JustifyContentInterface,
} from '../interface/common.interface';

export const View = ({
  alignItems,
  children,
  justifyContent,
  flex,
  padding,
  backgroundColor,
  borderRadius,
  borderColor,
  borderWidth,
  marginBottom,
  flexDirection,
  borderBottomColor,
  borderBottomWidth,
  shadowColor,
  shadowOffset,
  shadowOpacity,
  shadowRadius,
  elevation,
  width,
  marginLeft,
  paddingHorizontal,
  paddingVertical,
  borderTopWidth,
  borderTopColor,
  marginTop,
  marginRight,
  flexWrap,
  height,
}: {
  alignItems?: AlignItemsInterface;
  jus?: AlignItemsInterface;
  children?: any;
  justifyContent?: JustifyContentInterface;
  flex?: number;
  marginRight?: number;
  borderTopWidth?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  padding?: number;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
  borderBottomColor?: string;
  shadowColor?: string;
  borderTopColor?: string;
  borderWidth?: number;
  marginBottom?: number;
  borderBottomWidth?: number;
  shadowOpacity?: number;
  shadowRadius?: number;
  elevation?: number;
  marginLeft?: number;
  marginTop?: number;
  flexDirection?: FlexDirectionInterface;
  shadowOffset?: any;
  width?: number | string;
  height?: number | string;
  flexWrap?: FlexWrapInterface;
}) => {
  return (
    <RNView
      style={{
        alignItems: alignItems,
        height: height,
        flexWrap: flexWrap,
        justifyContent: justifyContent,
        flex: flex,
        padding: padding,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        borderColor: borderColor,
        borderWidth: borderWidth,
        marginBottom: marginBottom,
        flexDirection: flexDirection,
        borderBottomColor: borderBottomColor,
        borderBottomWidth: borderBottomWidth,
        shadowColor: shadowColor,
        shadowOffset: shadowOffset,
        shadowOpacity: shadowOpacity,
        shadowRadius: shadowRadius,
        elevation: elevation,
        width: width,
        marginLeft: marginLeft,
        paddingVertical: paddingVertical,
        paddingHorizontal: paddingHorizontal,
        borderTopWidth: borderTopWidth,
        borderTopColor: borderTopColor,
        marginTop: marginTop,
        marginRight: marginRight,
      }}>
      {children}
    </RNView>
  );
};
