import React from 'react';

import {Modal as RNModal} from 'react-native';
import {SlideModalInterface} from '../interface/common.interface';
import {colors} from '../style/color';
import {View} from './View';

export const Modal = ({
  visible,
  transparent,
  animationType,
  children,
}: {
  visible?: boolean;
  transparent?: boolean;
  animationType?: SlideModalInterface;
  children?: any;
}) => {
  return (
    <RNModal
      animationType={animationType}
      transparent={transparent}
      visible={visible}>
      <View
        flex={1}
        justifyContent="center"
        alignItems="center"
        backgroundColor={'#00000080'}>
        <View
          shadowColor={colors.black.regular}
          shadowOffset={{
            width: 0,
            height: 2,
          }}
          shadowOpacity={0.25}
          shadowRadius={4}
          elevation={5}
          backgroundColor={colors.white.regular}
          padding={16}
          borderRadius={12}
          width="90%">
          {children}
        </View>
      </View>
    </RNModal>
  );
};
