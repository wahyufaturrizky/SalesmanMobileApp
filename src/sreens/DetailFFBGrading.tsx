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
import {Text} from '../components/Text';
import {View} from '../components/View';
import {colors} from '../style/color';
import {strings} from '../translation';
import {client} from './Splash';
import moment from 'moment';

const DetailFFBGradingScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : colors.green.regular,
  };

  return (
    <SafeAreaView flex={1} backgroundColor={colors.white.lighter}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <View
        padding={24}
        borderBottomColor={colors.white.light}
        backgroundColor={colors.white.regular}
        borderBottomWidth={1}>
        <Text
          label={strings.common.truckNumber}
          fontSize={18}
          fontWeight="400"
          color={colors.black.regular}
          textAlign="center"
          marginBottom={8}
        />
        <Text
          label={route.params.detailData.truck_no}
          fontSize={32}
          fontWeight="600"
          color={colors.black.regular}
          textAlign="center"
        />
      </View>

      <View padding={24}>
        <Button
          backgroundColor={colors.green.regular}
          label={strings.detailFFBGrading.startGrading}
          labelColor={colors.white.regular}
          onPress={() => {
            navigation.navigate('Grading', {
              detailData: route?.params?.detailData,
            });
          }}
          sizeLabel={20}
        />
      </View>
    </SafeAreaView>
  );
};

export default DetailFFBGradingScreen;
