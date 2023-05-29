/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button} from '../components/Button';
import {ClassificationResultItems} from '../components/ClassificationResultItems';
import {FlatList} from '../components/FlatList';
import {SafeAreaView} from '../components/SafeAreaView';
import {Spinner} from '../components/Spinner';
import {StatusBar} from '../components/StatusBar';
import {Text} from '../components/Text';
import {View} from '../components/View';
import {colors} from '../style/color';
import {strings} from '../translation';

const ClassificationResultsScreen = ({navigation}: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [stateClasification, setStateClasification] = useState<any[]>([
    {
      image: 'https://i.ibb.co/jgC7Khx/image-1.png',
      status: 'Ripe',
      key: 1,
      actual: 'Ripe',
    },
    {
      image: 'https://i.ibb.co/jgC7Khx/image-1.png',
      status: 'Overripe',
      key: 2,
      actual: 'Ripe',
    },
    {
      image: 'https://i.ibb.co/jgC7Khx/image-1.png',
      status: 'Discounted',
      key: 3,
      actual: 'Ripe',
    },
    {
      image: 'https://i.ibb.co/jgC7Khx/image-1.png',
      status: 'Unripe',
      key: 4,
      actual: 'Ripe',
    },
  ]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : colors.green.regular,
  };

  const renderFooter = () => (
    <View>
      <Spinner size="small" color={colors.green.regular} />
      <Text
        label={strings.common.noMoreData}
        fontSize={14}
        fontWeight="400"
        color={colors.black.regular}
        textAlign="center"
      />
    </View>
  );

  const renderEmpty = () => (
    <View>
      <Text
        label="No Data at the moment"
        fontSize={14}
        fontWeight="400"
        color={colors.black.regular}
        textAlign="center"
      />
      <Button
        onPress={() => {}}
        labelColor={colors.green.regular}
        label={strings.common.refresh}
      />
    </View>
  );

  const onActualChange = (itemValue: any, itemIndex: number, item: any) => {
    const updateActualValue = stateClasification.map(data => {
      if (data.key === item.key) {
        return {
          ...data,
          actual: itemValue,
        };
      } else {
        return data;
      }
    });

    setStateClasification(updateActualValue);
  };

  return (
    <SafeAreaView flex={1} backgroundColor={colors.white.lighter}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <View flex={1}>
        <View
          paddingHorizontal={24}
          paddingVertical={8}
          marginTop={16}
          backgroundColor={colors.green.light}>
          <Text
            label={strings.classificationResults.beltStatus}
            fontSize={14}
            fontWeight="400"
            color={colors.white.regular}
            textAlign="center"
          />

          <Text
            label={strings.classificationResults.runningStop}
            fontSize={16}
            fontWeight="400"
            color={colors.white.regular}
            textAlign="center"
          />
        </View>

        <View
          paddingHorizontal={24}
          paddingVertical={8}
          marginTop={16}
          backgroundColor={colors.green.light}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center">
          <View>
            <Text
              label={strings.classificationResults.totalCount}
              fontSize={14}
              fontWeight="400"
              color={colors.white.regular}
              textAlign="center"
            />

            <Text
              label={100}
              fontSize={14}
              fontWeight="400"
              color={colors.white.regular}
              textAlign="center"
            />
          </View>

          <View>
            <Text
              label={strings.classificationResults.totalAccepted}
              fontSize={14}
              fontWeight="400"
              color={colors.white.regular}
              textAlign="center"
            />

            <Text
              label={85}
              fontSize={14}
              fontWeight="400"
              color={colors.white.regular}
              textAlign="center"
            />
          </View>

          <View>
            <Text
              label={strings.classificationResults.totalRejected}
              fontSize={14}
              fontWeight="400"
              color={colors.white.regular}
              textAlign="center"
            />

            <Text
              label={15}
              fontSize={14}
              fontWeight="400"
              color={colors.white.regular}
              textAlign="center"
            />
          </View>
        </View>

        <View padding={24}>
          <Text
            label={strings.classificationResults.classificationResults}
            fontSize={16}
            fontWeight="400"
            color={colors.black.regular}
          />
        </View>

        <FlatList
          data={stateClasification}
          renderItem={({item}) => (
            <ClassificationResultItems
              onActualChange={onActualChange}
              item={item}
            />
          )}
          ListFooterComponent={renderFooter}
          ListEmptyComponent={renderEmpty}
          keyExtractor={item => item.key}
        />
      </View>
    </SafeAreaView>
  );
};

export default ClassificationResultsScreen;
