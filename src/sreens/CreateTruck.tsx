/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import moment from 'moment';
import React, {useEffect, useState, useContext} from 'react';
import {useForm, useWatch} from 'react-hook-form';
import {Platform, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button} from '../components/Button';
import {Input} from '../components/Input';
import {SafeAreaView} from '../components/SafeAreaView';
import {StatusBar} from '../components/StatusBar';
import {View} from '../components/View';
import {ListOfTruckInterface} from '../interface/new-automatic-ffb-grading.interface';
import {colors} from '../style/color';
import {strings} from '../translation';
import {TruckContext} from '../context/TruckProvider';

const CreateTruckScreen = ({navigation: {navigate}}: any) => {
  const {dataTruck} = useContext(TruckContext);
  const [listOfTruck, setListOfTruck] = useState<ListOfTruckInterface[]>([]);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : colors.green.regular,
  };

  useEffect(() => {
    setListOfTruck(dataTruck?.listTruck);
  }, [dataTruck?.listTruck]);

  const {
    control: controlTruck,
    handleSubmit: handleSubmitTruck,
    getValues,
    setError,
    clearErrors,
    formState: {errors},
  } = useForm<ListOfTruckInterface>({
    defaultValues: {
      truck_no: '',
      entry_time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    },
  });

  useWatch({
    control: controlTruck,
    name: 'truck_no',
  });

  useEffect(() => {
    const checkNumberTruckAlreadyInList = () => {
      const checkNumberTruck = listOfTruck.find(
        (findNumberTruck: any) =>
          findNumberTruck.truck_no === getValues('truck_no'),
      );

      if (checkNumberTruck) {
        setError('truck_no', {
          message: strings.createTruck.theTruckNumberIsExist,
        });
      } else {
        clearErrors('truck_no');
      }
    };

    checkNumberTruckAlreadyInList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getValues('truck_no'), setError, clearErrors]);

  const onSubmitTruck = (data: any) => {
    navigate('DetailFFBGrading', {detailData: data});
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
        <Input
          noSpace
          isUpperCase
          maxLength={10}
          keyboardType={Platform.OS === 'ios' ? 'default' : 'visible-password'}
          borderColor={colors.black.light}
          borderRadius={12}
          borderWidth={4}
          label={strings.common.truckNumber}
          labelColor={colors.black.light}
          labelFontSize={16}
          name="truck_no"
          control={controlTruck}
        />
      </View>

      <View padding={24}>
        <Button
          backgroundColor={
            Object.keys(errors).length || !getValues('truck_no')
              ? colors.green.lighter
              : colors.green.regular
          }
          disabled={
            !getValues('truck_no') ||
            (Object.keys(errors).length ? true : false)
          }
          label={strings.createTruck.addTruck}
          labelColor={colors.white.regular}
          onPress={handleSubmitTruck(onSubmitTruck)}
          sizeLabel={20}
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateTruckScreen;
