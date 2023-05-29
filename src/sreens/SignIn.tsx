/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useForm} from 'react-hook-form';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button} from '../components/Button';
import {Input} from '../components/Input';
import {SafeAreaView} from '../components/SafeAreaView';
import {Text} from '../components/Text';
import {View} from '../components/View';
import {useSignIn} from '../services/sign-in/useSignIn';
import {colors} from '../style/color';
import {strings} from '../translation';

const SignInScreen = ({navigation}: {navigation: any}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const {control, handleSubmit} = useForm({
    defaultValues: {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    },
  });

  const {mutate: createSignIn, isLoading: isLoadingSignIn} = useSignIn({
    options: {
      onSuccess: (data: any) => {
        AsyncStorage.setItem('token', data.data.token);

        navigation.navigate('AutomaticFFBGrading');
      },
      onError: (e: any) => {},
    },
  });

  const onSubmit = (data: {email: string; password: string}) => {
    createSignIn(data);
  };

  useEffect(() => {
    const fetchToken = async () => {
      const res = await AsyncStorage.getItem('token');
      if (res) {
        navigation.navigate('AutomaticFFBGrading');
      }
    };

    fetchToken();
  }, []);

  return (
    <SafeAreaView flex={1} padding={24} backgroundColor={colors.white.lighter}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <View flex={1}>
        <Text
          label={strings.signIn.automaticFfbGrading}
          fontSize={24}
          textAlign="center"
          fontWeight="700"
          color={colors.green.regular}
          marginVertical={56}
        />

        <Input
          borderColor={colors.black.light}
          borderRadius={12}
          borderWidth={4}
          label="Username"
          labelColor={colors.black.light}
          labelFontSize={16}
          marginBottom={16}
          rules={{
            required: {
              value: true,
              message: 'Username required',
            },
          }}
          name="email"
          control={control}
        />

        <Input
          borderColor={colors.black.light}
          borderRadius={12}
          borderWidth={4}
          label="Password"
          labelColor={colors.black.light}
          labelFontSize={16}
          secureTextEntry={true}
          rules={{
            required: {
              value: true,
              message: 'Password required',
            },
          }}
          name="password"
          control={control}
        />
      </View>

      <Button
        backgroundColor={colors.green.regular}
        label={isLoadingSignIn ? 'Loading...' : strings.signIn.login}
        labelColor={colors.white.regular}
        textTransform="uppercase"
        onPress={handleSubmit(onSubmit)}
        sizeLabel={20}
        disabled={isLoadingSignIn}
      />
    </SafeAreaView>
  );
};

export default SignInScreen;
