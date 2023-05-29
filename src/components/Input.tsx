/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Controller} from 'react-hook-form';
import {KeyboardTypeOptions, TextInput as RNTextInput} from 'react-native';
import {AutoCapitalizeInterface} from '../interface/common.interface';
import {colors} from '../style/color';
import {Text} from './Text';
import {View} from './View';

export const Input = ({
  borderWidth,
  borderColor,
  borderRadius,
  label,
  labelColor,
  labelFontSize,
  marginBottom,
  secureTextEntry,
  control,
  rules,
  name,
  autoCapitalize,
  noSpace,
  isUpperCase,
  keyboardType,
  maxLength,
}: {
  borderWidth?: number;
  borderColor?: string;
  noSpace?: boolean;
  isUpperCase?: boolean;
  name: string;
  borderRadius?: number;
  maxLength?: number;
  label?: string;
  labelColor?: string;
  labelFontSize?: number;
  marginBottom?: number;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  control?: any;
  rules?: any;
  autoCapitalize?: AutoCapitalizeInterface;
}) => {
  return (
    <View marginBottom={marginBottom}>
      <Text
        marginBottom={4}
        fontWeight="700"
        fontSize={labelFontSize}
        color={labelColor}
        label={label}
      />

      <Controller
        control={control}
        rules={rules}
        render={({
          field: {onChange, onBlur, value},
          fieldState: {error},
        }: any) => (
          <View>
            <RNTextInput
              maxLength={maxLength}
              secureTextEntry={secureTextEntry}
              keyboardType={keyboardType}
              style={{
                borderWidth: borderWidth,
                borderColor: borderColor,
                borderRadius: borderRadius,
                paddingHorizontal: 16,
              }}
              onBlur={onBlur}
              onChangeText={e => {
                if (noSpace && e.includes(' ')) {
                  return;
                }
                onChange(isUpperCase ? e.toUpperCase() : e);
              }}
              value={value}
              autoCapitalize={autoCapitalize}
            />

            {error && (
              <Text
                fontWeight="400"
                color={colors.red.regular}
                label={error.message}
                marginTop={4}
              />
            )}
          </View>
        )}
        name={name}
      />
    </View>
  );
};
