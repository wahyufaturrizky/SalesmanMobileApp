/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {Button} from '../components/Button';
import {SafeAreaView} from '../components/SafeAreaView';
import {StatusBar} from '../components/StatusBar';
import {View} from '../components/View';
import {colors} from '../style/color';
import {strings} from '../translation';

const AutomaticFFBGradingScreen = ({navigation}: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : colors.green.regular,
  };

  useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        e.preventDefault();
      }),
    [navigation],
  );

  return (
    <SafeAreaView flex={1} backgroundColor={colors.white.lighter}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <View flex={1} />
      <View padding={24}>
        <Button
          backgroundColor={colors.green.regular}
          label={strings.automaticFFBGrading.newFFBGrading}
          labelColor={colors.white.regular}
          onPress={() => {
            navigation.navigate('NewAutomaticFFBGrading');
          }}
          sizeLabel={20}
        />
      </View>
    </SafeAreaView>
  );
};

export default AutomaticFFBGradingScreen;
