/* eslint-disable react/no-unstable-nested-components */
/**
 * Sample React Native App
 * GitHub - facebook/react-native: A framework for building native applications using React
 *
 * @format
 */

import moment from 'moment';
import React, {useContext, useEffect, useState} from 'react';
import {useForm, useWatch} from 'react-hook-form';
import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button} from '../components/Button';
import {Image} from '../components/Image';
import {ModalConfirmationGrading} from '../components/ModalConfirmationGrading';
import {SafeAreaView} from '../components/SafeAreaView';
import {ScrollView} from '../components/ScrollView';
import {StatusBar} from '../components/StatusBar';
import {Text} from '../components/Text';
import {TouchableOpacity} from '../components/TouchableOpacity';
import {View} from '../components/View';
import {TruckContext} from '../context/TruckProvider';
import {
  FormCriteriaInterface,
  FormCriteriaType,
} from '../interface/grading.interface';
import {colors} from '../style/color';
import {strings} from '../translation';

const GradingScreen = ({
  navigation: {setOptions, goBack, navigate},
  route,
}: any) => {
  const {dataTruck} = useContext(TruckContext);

  const isDarkMode = useColorScheme() === 'dark';
  const [modalConfirmation, setModalConfirmation] = useState<{
    isShowModalConfirmation?: boolean;
    titleModalConfirmation?: string;
    subTitleModalConfirmation?: string;
    dataModalConfirmation?: null;
  }>({
    isShowModalConfirmation: false,
    titleModalConfirmation: '',
    subTitleModalConfirmation: '',
    dataModalConfirmation: null,
  });
  const {
    isShowModalConfirmation,
    titleModalConfirmation,
    subTitleModalConfirmation,
  } = modalConfirmation;
  const [isSendGrading, setIsSendGrading] = useState<boolean>(true);
  const [totalCountGrading, setTotalCountGrading] = useState<number>(0);
  const [totalAccepted, setTotalAccepted] = useState<number>(0);
  const [totalRejected, setTotalRejected] = useState<number>(0);

  const {setValue, getValues, control, handleSubmit, reset} =
    useForm<FormCriteriaType>({
      defaultValues: {
        grading_result: {
          criteria: '',
        },
        ffb_id: '',
        ffb_no: 0,
        truck_id: 0,
        time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      },
    });

  useWatch({
    control,
    name: ['ffb_id', 'truck_id', 'ffb_no', 'time', 'grading_result.criteria'],
  });

  useEffect(() => {
    if (dataTruck?.ffbPrediction) {
      reset({
        grading_result: {
          criteria: '',
        },
      });
      const {ffb_id, ffb_no, truck_id, time} = dataTruck?.ffbPrediction;
      setIsSendGrading(false);
      setValue('ffb_id', ffb_id);
      setValue('ffb_no', ffb_no);
      setValue('truck_id', truck_id);
      setValue('time', time);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataTruck?.ffbPrediction]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : colors.green.regular,
  };

  const dataAcceptReject = [
    {
      name: '',
      borderColor: colors.white.regular,
      backgroundColor: colors.white.regular,
      labelColor: colors.white.regular,
      iconInActive: null,
      iconActive: null,
    },
    {
      name: 'BUKAN TBS',
      borderColor: colors.red.regular,
      backgroundColor: colors.red.regular,
      labelColor: colors.red.regular,
      iconInActive: (
        <Image size={24} source={require('../assets/icons/ic_bukan_tbs.png')} />
      ),
      iconActive: (
        <Image
          size={24}
          source={require('../assets/icons/ic_bukan_tbs_white.png')}
        />
      ),
    },
    {
      name: 'ABNORMAL',
      borderColor: colors.red.regular,
      backgroundColor: colors.red.regular,
      labelColor: colors.red.regular,
      iconInActive: (
        <Image size={24} source={require('../assets/icons/ic_abnormal.png')} />
      ),
      iconActive: (
        <Image
          size={24}
          source={require('../assets/icons/ic_abnormal_white.png')}
        />
      ),
    },
    {
      name: 'KECIL',
      borderColor: colors.red.regular,
      backgroundColor: colors.red.regular,
      labelColor: colors.red.regular,
      iconInActive: (
        <Image size={24} source={require('../assets/icons/ic_kecil.png')} />
      ),
      iconActive: (
        <Image
          size={24}
          source={require('../assets/icons/ic_kecil_white.png')}
        />
      ),
    },
    {
      name: 'GIGITAN TIKUS',
      borderColor: colors.red.regular,
      backgroundColor: colors.red.regular,
      labelColor: colors.red.regular,
      iconInActive: (
        <Image
          size={24}
          source={require('../assets/icons/ic_gigitan_tikus.png')}
        />
      ),
      iconActive: (
        <Image
          size={24}
          source={require('../assets/icons/ic_gigitan_tikus_white.png')}
        />
      ),
    },
    {
      name: 'JANJANGAN KOSONG',
      borderColor: colors.red.regular,
      backgroundColor: colors.red.regular,
      labelColor: colors.red.regular,
      iconInActive: (
        <Image
          size={24}
          source={require('../assets/icons/ic_janjangan_kosong.png')}
        />
      ),
      iconActive: (
        <Image
          size={24}
          source={require('../assets/icons/ic_janjangan_kosong_white.png')}
        />
      ),
    },
    {
      name: 'TERLALU MATANG',
      borderColor: colors.red.regular,
      backgroundColor: colors.red.regular,
      labelColor: colors.red.regular,
      iconInActive: (
        <Image
          size={24}
          source={require('../assets/icons/ic_terlalu_matang.png')}
        />
      ),
      iconActive: (
        <Image
          size={24}
          source={require('../assets/icons/ic_terlalu_matang_white.png')}
        />
      ),
    },
    {
      name: 'MENTAH',
      borderColor: colors.red.regular,
      backgroundColor: colors.red.regular,
      labelColor: colors.red.regular,
      iconInActive: (
        <Image size={24} source={require('../assets/icons/ic_dislike.png')} />
      ),
      iconActive: (
        <Image
          size={24}
          source={require('../assets/icons/ic_dislike_white.png')}
        />
      ),
    },
    {
      name: 'MATANG (TANGKAI PANJANG + SAMPAH)',
      borderColor: colors.green.regular,
      backgroundColor: colors.green.regular,
      labelColor: colors.green.regular,
      iconInActive: (
        <Image
          size={24}
          source={require('../assets/icons/ic_matang_tangkai_panjang_sampah.png')}
        />
      ),
      iconActive: (
        <Image
          size={24}
          source={require('../assets/icons/ic_matang_tangkai_panjang_sampah_white.png')}
        />
      ),
    },
    {
      name: 'MATANG (TANGKAI PANJANG)',
      borderColor: colors.green.regular,
      backgroundColor: colors.green.regular,
      labelColor: colors.green.regular,
      iconInActive: (
        <Image
          size={24}
          source={require('../assets/icons/ic_matang_tangkai_panjang.png')}
        />
      ),
      iconActive: (
        <Image
          size={24}
          source={require('../assets/icons/ic_matang_tangkai_panjang_white.png')}
        />
      ),
    },
    {
      name: 'MATANG (SAMPAH)',
      borderColor: colors.green.regular,
      backgroundColor: colors.green.regular,
      labelColor: colors.green.regular,
      iconInActive: (
        <Image
          size={24}
          source={require('../assets/icons/ic_matang_sampah.png')}
        />
      ),
      iconActive: (
        <Image
          size={24}
          source={require('../assets/icons/ic_matang_sampah_white.png')}
        />
      ),
    },
    {
      name: 'MATANG',
      borderColor: colors.green.regular,
      backgroundColor: colors.green.regular,
      labelColor: colors.green.regular,
      iconInActive: (
        <Image size={24} source={require('../assets/icons/ic_like.png')} />
      ),
      iconActive: (
        <Image
          size={24}
          source={require('../assets/icons/ic_like_white.png')}
        />
      ),
    },
  ];

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <View marginRight={32}>
          <TouchableOpacity
            onPress={() => {
              setModalConfirmation({
                ...modalConfirmation,
                isShowModalConfirmation: true,
                titleModalConfirmation: strings.grading.areYouSureYouWantToExit,
                subTitleModalConfirmation:
                  strings.grading.thisDataWillNotBeSaved,
              });
            }}>
            <Image size={24} source={require('../assets/icons/ic_back.png')} />
          </TouchableOpacity>
        </View>
      ),
      title: `#${getValues('ffb_no') || route.params?.detailData?.truck_no}`,
      headerRight: () => (
        <View alignItems="center">
          <Text
            label={strings.grading.totalCount}
            fontSize={12}
            fontWeight="400"
            color={colors.white.regular}
          />

          <Text
            label={totalCountGrading}
            fontSize={16}
            fontWeight="700"
            color={colors.white.regular}
          />
        </View>
      ),
    });
  }, [goBack, modalConfirmation, setOptions]);

  const onSubmit = (data: FormCriteriaInterface) => {
    console.log('@data', data);

    const payload = {
      ffb_id: data.ffb_id,
      ffb_no: data.ffb_no,
      truck_id: data.truck_id,
      time: data.time,
      grading_result: {
        ripe:
          data.grading_result.criteria === 'MATANG' ||
          data.grading_result.criteria === 'MATANG (TANGKAI PANJANG + SAMPAH)'
            ? true
            : false,
        long_stalk:
          data.grading_result.criteria === 'MATANG (TANGKAI PANJANG)' ||
          data.grading_result.criteria === 'MATANG (TANGKAI PANJANG + SAMPAH)'
            ? true
            : false,
        rat_damage:
          data.grading_result.criteria === 'GIGITAN TIKUS' ? true : false,
        empty_bunch:
          data.grading_result.criteria === 'JANJANGAN KOSONG' ? true : false,
        dirty:
          data.grading_result.criteria === 'MATANG (SAMPAH)' ||
          data.grading_result.criteria === 'MATANG (TANGKAI PANJANG + SAMPAH)'
            ? true
            : false,
        overripe:
          data.grading_result.criteria === 'TERLALU MATANG' ? true : false,
        unripe: data.grading_result.criteria === 'MENTAH',
        abnormal: data.grading_result.criteria === 'ABNORMAL',
        non_ffb: data.grading_result.criteria === 'BUKAN TBS',
        small: data.grading_result.criteria === 'KECIL',
      },
    };

    const isAccepted =
      data.grading_result.criteria === 'MATANG' ||
      data.grading_result.criteria === 'MATANG (TANGKAI PANJANG)' ||
      data.grading_result.criteria === 'MATANG (TANGKAI PANJANG + SAMPAH)' ||
      data.grading_result.criteria === 'MATANG (SAMPAH)';

    const isRejected =
      data.grading_result.criteria === 'MENTAH' ||
      data.grading_result.criteria === 'TERLALU MATANG' ||
      data.grading_result.criteria === 'GIGITAN TIKUS' ||
      data.grading_result.criteria === 'BUKAN TBS' ||
      data.grading_result.criteria === 'KECIL' ||
      data.grading_result.criteria === 'JANJANGAN KOSONG' ||
      data.grading_result.criteria === 'ABNORMAL';

    if (isAccepted) {
      setTotalAccepted(totalAccepted + 1);
    }

    if (isRejected) {
      setTotalRejected(totalRejected + 1);
    }

    setTotalCountGrading(totalCountGrading + 1);

    console.log('@payload', payload);

    setIsSendGrading(true);
  };

  return (
    <SafeAreaView flex={1} backgroundColor={colors.white.regular}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <ScrollView flex={1}>
        {isSendGrading ? (
          <View
            paddingHorizontal={24}
            paddingVertical={24}
            borderBottomColor={colors.white.light}
            backgroundColor={colors.white.regular}
            flexDirection="row"
            alignItems="center"
            borderBottomWidth={1}>
            <Text
              label={strings.grading.waitingForTheNextFFB}
              fontSize={14}
              fontWeight="400"
              color={colors.black.regular}
            />
          </View>
        ) : (
          <View paddingHorizontal={24} paddingVertical={8}>
            <Text
              label={strings.common.reject}
              fontSize={18}
              fontWeight="400"
              color={colors.black.regular}
              marginBottom={8}
            />

            <View flexDirection="row" flexWrap="wrap">
              {dataAcceptReject.map((data: any, index: any) => {
                return (
                  <View width={'50%'} key={index}>
                    <TouchableOpacity
                      disabled={data.name === ''}
                      onPress={() => {
                        setValue('grading_result.criteria', data.name);
                      }}>
                      {data.name === 'MATANG (TANGKAI PANJANG + SAMPAH)' && (
                        <Text
                          label={strings.common.accept}
                          fontSize={18}
                          fontWeight="400"
                          color={colors.black.regular}
                          marginBottom={8}
                        />
                      )}

                      <Button
                        disabled={data.name === ''}
                        onPress={() => {
                          setValue('grading_result.criteria', data.name);
                        }}
                        height={90}
                        icon={
                          getValues('grading_result.criteria') === data.name
                            ? data.iconActive
                            : data.iconInActive
                        }
                        backgroundColor={
                          getValues('grading_result.criteria') === data.name
                            ? data.backgroundColor
                            : colors.white.regular
                        }
                        label={
                          data.name === 'BUKAN TBS' ? 'Bukan TBS' : data.name
                        }
                        labelColor={
                          getValues('grading_result.criteria') === data.name
                            ? colors.white.regular
                            : data.labelColor
                        }
                        sizeLabel={14}
                        textTransform={
                          data.name === 'BUKAN TBS' ? 'none' : 'capitalize'
                        }
                        borderColor={data.borderColor}
                        borderWidth={2}
                        marginBottom={8}
                        marginLeft={8}
                        marginTop={
                          data.name === 'MATANG (TANGKAI PANJANG)'
                            ? 30
                            : undefined
                        }
                      />
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        )}
      </ScrollView>

      <View padding={24}>
        <Button
          padding={16}
          backgroundColor={
            isSendGrading
              ? colors.red.regular
              : getValues('grading_result.criteria')
              ? colors.green.regular
              : colors.green.lighter
          }
          label={
            isSendGrading
              ? `${strings.grading.endGradingFor} ${route.params?.detailData?.truck_no}`
              : strings.grading.send
          }
          labelColor={colors.white.regular}
          onPress={e => {
            if (isSendGrading) {
              setModalConfirmation({
                ...modalConfirmation,
                isShowModalConfirmation: true,
                titleModalConfirmation: strings.grading.areYouSureHeader,
                subTitleModalConfirmation: strings.grading.areYouSureSubtitle,
              });
            } else {
              handleSubmit(onSubmit)(e);
            }
          }}
          sizeLabel={20}
          textTransform={isSendGrading ? 'none' : 'capitalize'}
          disabled={
            !isSendGrading ? !getValues('grading_result.criteria') : false
          }
          isShimmer={
            isSendGrading
              ? false
              : getValues('grading_result.criteria')
              ? true
              : false
          }
        />
      </View>

      <ModalConfirmationGrading
        headerTitle={titleModalConfirmation}
        totalCountGrading={totalCountGrading}
        totalAccepted={totalAccepted}
        totalRejected={totalRejected}
        truck_no={route.params?.detailData?.truck_no}
        subtitle={subTitleModalConfirmation}
        animationType="slide"
        transparent
        visible={isShowModalConfirmation}
        onPrimaryActionBtn={() => {
          navigate('NewAutomaticFFBGrading');
        }}
        onSecondaryActionBtn={() => {
          setModalConfirmation({
            ...modalConfirmation,
            isShowModalConfirmation: false,
          });
        }}
      />
    </SafeAreaView>
  );
};

export default GradingScreen;
