import React from 'react';
import {colors} from '../style/color';
import {SafeAreaView} from './SafeAreaView';
import {Spinner} from './Spinner';
import {View} from './View';

export const ScreenLoader = () => {
  return (
    <SafeAreaView backgroundColor={colors.green.regular} flex={1}>
      <View justifyContent="center" flex={1} alignItems="center">
        <Spinner size="large" color={colors.white.regular} />
      </View>
    </SafeAreaView>
  );
};
