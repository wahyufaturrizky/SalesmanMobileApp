/* eslint-disable react/no-unstable-nested-components */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import packageJson from './package.json';
import {Image} from './src/components/Image';
import {Text} from './src/components/Text';
import {TouchableOpacity} from './src/components/TouchableOpacity';
import {TruckProvider} from './src/context/TruckProvider';
import AutomaticFFBGradingScreen from './src/sreens/AutomaticFFBGrading';
import ClassificationResultsScreen from './src/sreens/ClassificationResults';
import CreateTruckScreen from './src/sreens/CreateTruck';
import DetailFFBGradingScreen from './src/sreens/DetailFFBGrading';
import GradingScreen from './src/sreens/Grading';
import NewAutomaticFFBGradingScreen from './src/sreens/NewAutomaticFFBGrading';
import SplashScreen from './src/sreens/Splash';
import {colors} from './src/style/color';
import {strings} from './src/translation';
import SignInScreen from './src/sreens/SignIn';

const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <TruckProvider>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Splash">
              {props => <SplashScreen {...props} />}
            </Stack.Screen>

            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="SignIn">
              {props => <SignInScreen {...props} />}
            </Stack.Screen>

            <Stack.Screen
              options={{
                title: strings.automaticFFBGrading.title,
                headerBackVisible: false,
                headerStyle: {
                  backgroundColor: colors.green.regular,
                },
                headerTitleStyle: {
                  color: colors.white.regular,
                },
                headerRight: () => (
                  <Text
                    label={'(POC) v' + packageJson.version}
                    textAlign="center"
                    fontWeight="400"
                    color={colors.white.regular}
                  />
                ),
              }}
              name="AutomaticFFBGrading">
              {props => <AutomaticFFBGradingScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen
              options={({navigation}) => ({
                title: strings.newFFbGrading.title,
                headerStyle: {
                  backgroundColor: colors.green.regular,
                },
                headerTitleStyle: {
                  color: colors.white.regular,
                },
                headerTintColor: colors.white.regular,
                headerRight: () => (
                  <TouchableOpacity
                    onPress={async () => {
                      navigation.navigate('CreateTruck');
                    }}>
                    <Image
                      size={24}
                      source={require('./src/assets/icons/ic_plus.png')}
                    />
                  </TouchableOpacity>
                ),
              })}
              name="NewAutomaticFFBGrading">
              {props => <NewAutomaticFFBGradingScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen
              options={() => ({
                title: strings.common.back,
                headerStyle: {
                  backgroundColor: colors.green.regular,
                },
                headerTitleStyle: {
                  color: colors.white.regular,
                },
                headerTintColor: colors.white.regular,
              })}
              name="CreateTruck">
              {props => <CreateTruckScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen
              options={({route}) => ({
                title: route.params?.detailData?.truck_no,
                headerStyle: {
                  backgroundColor: colors.green.regular,
                },
                headerTitleStyle: {
                  color: colors.white.regular,
                },
                headerTintColor: colors.white.regular,
              })}
              name="ClassificationResults">
              {props => <ClassificationResultsScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen
              options={({route}) => ({
                title: strings.common.back,
                headerStyle: {
                  backgroundColor: colors.green.regular,
                },
                headerTitleStyle: {
                  color: colors.white.regular,
                },
                headerTintColor: colors.white.regular,
              })}
              name="DetailFFBGrading">
              {props => <DetailFFBGradingScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen
              options={({route}) => ({
                headerStyle: {
                  backgroundColor: colors.green.regular,
                },
                headerTitleStyle: {
                  color: colors.white.regular,
                },
                headerTintColor: colors.white.regular,
              })}
              name="Grading">
              {props => <GradingScreen {...props} />}
            </Stack.Screen>
          </Stack.Navigator>
        </QueryClientProvider>
      </NavigationContainer>
    </TruckProvider>
  );
}

export default App;
