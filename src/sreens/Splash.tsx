/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState, useContext} from 'react';
import {useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Image} from '../components/Image';
import {SafeAreaView} from '../components/SafeAreaView';
import {StatusBar} from '../components/StatusBar';
import {Text} from '../components/Text';
import {View} from '../components/View';
import {colors} from '../style/color';
import {strings} from '../translation';
import packageJson from '../../package.json';
import {TruckContext} from '../context/TruckProvider';

const SplashScreen = ({navigation}: any) => {
  const [timePassed, setTimePassed] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : colors.green.regular,
  };

  setTimeout(function () {
    setTimePassed(true);
  }, 1000);

  useEffect(() => {
    if (timePassed) {
      navigation.navigate('AutomaticFFBGrading');
    }
  }, [navigation, timePassed]);

  return (
    <SafeAreaView flex={1} backgroundColor={colors.white.lighter}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <View justifyContent="center" alignItems="center" flex={1}>
        <Image
          size={200}
          source={require('../assets/images/asianagri-logo.png')}
          resizeMode="contain"
        />

        <Text
          label={strings.signIn.automaticFfbGrading}
          fontSize={24}
          textAlign="center"
          fontWeight="700"
          color={colors.black.regular}
          marginTop={12}
        />

        <Text
          label="(Automated FFB Grading)"
          fontSize={24}
          textAlign="center"
          fontWeight="700"
          color={colors.black.regular}
        />

        <Text
          label={'(' + strings.splash.poc + ')'}
          fontSize={14}
          textAlign="center"
          fontWeight="400"
          color={colors.black.regular}
          marginTop={6}
        />

        <Text
          label={'v' + packageJson.version}
          fontSize={14}
          textAlign="center"
          fontWeight="400"
          color={colors.black.regular}
        />

        <Text
          label={strings.common.loading}
          fontSize={14}
          textAlign="center"
          fontWeight="400"
          color={colors.black.regular}
          marginTop={30}
        />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
