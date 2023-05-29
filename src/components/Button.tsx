import React from 'react';
import {
  JustifyContentInterface,
  TextTransformInterface,
} from '../interface/common.interface';
import {colors} from '../style/color';
import {AnimatedView} from './AnimatedView';
import {Spinner} from './Spinner';

import {Text} from './Text';
import {TouchableOpacity} from './TouchableOpacity';
import {View} from './View';

export const Button = ({
  label,
  backgroundColor,
  labelColor,
  textTransform,
  onPress,
  sizeLabel,
  borderColor,
  borderWidth,
  marginBottom,
  disabled,
  borderRadius,
  textAlign,
  padding,
  marginTop,
  isLoading,
  isShimmer,
  icon,
  height,
  marginLeft,
  width,
}: {
  label?: string;
  icon?: any;
  borderColor?: string;
  backgroundColor?: string;
  textAlign?: JustifyContentInterface;
  labelColor?: string;
  textTransform?: TextTransformInterface;
  onPress?: (e?: any) => void;
  sizeLabel?: number;
  borderWidth?: number;
  borderRadius?: number;
  marginBottom?: number;
  padding?: number;
  marginLeft?: number;
  marginTop?: number;
  disabled?: boolean;
  isLoading?: boolean;
  isShimmer?: boolean;
  height?: number | string;
  width?: number | string;
}) => {
  return (
    <View
      padding={padding || 8}
      backgroundColor={backgroundColor}
      height={height}
      width={width}
      borderRadius={borderRadius || 8}
      borderColor={borderColor}
      borderWidth={borderWidth}
      marginTop={marginTop}
      justifyContent={icon ? 'center' : undefined}
      marginBottom={marginBottom}
      marginLeft={marginLeft}>
      {isShimmer && <AnimatedView />}
      <TouchableOpacity disabled={disabled} onPress={onPress}>
        <View
          alignItems="center"
          justifyContent={textAlign || 'center'}
          flexDirection="row">
          {isLoading && (
            <Spinner
              marginRight={4}
              size="small"
              color={colors.white.regular}
            />
          )}
          <View alignItems={icon ? 'center' : 'baseline'}>
            {icon}
            <Text
              fontWeight="500"
              color={labelColor}
              textAlign="center"
              fontSize={sizeLabel}
              label={label}
              textTransform={textTransform}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
