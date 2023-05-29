import React from 'react';
import {colors} from '../style/color';
import {strings} from '../translation';
import {Image} from './Image';
import {SelectDropdown} from './SelectDropdown';
import {Text} from './Text';
import {View} from './View';

export const ClassificationResultItems = ({
  item,
  onActualChange,
}: {
  onActualChange?: (itemValue: any, itemIndex: number, item: any) => void;
  item: {
    image: string;
    status: 'Ripe' | 'Overripe' | 'Discounted' | 'Unripe';
  };
}) => {
  const actualItem = [
    {label: 'Ripe', value: 'Ripe'},
    {label: 'Discounted', value: 'Discounted'},
    {label: 'Unripe', value: 'Unripe'},
    {label: 'Overripe', value: 'Overripe'},
  ];
  const {image, status, actual} = item;

  const backgroundColorTypeStatus = {
    Ripe: colors.green.regular,
    Discounted: colors.green.dark,
    Unripe: colors.red.dark,
    Overripe: colors.red.darker,
  };

  return (
    <View borderTopWidth={2} borderTopColor={colors.white.light}>
      <View flexDirection="row" alignItems="center" width={'100%'}>
        <View width={'20%'}>
          <Image size={80} source={{uri: image}} />
        </View>

        <View width={'80%'} paddingHorizontal={16}>
          <View flex={1} alignItems="center" flexDirection="row">
            <View flex={3}>
              <Text
                label={strings.classificationResults.predicted}
                fontSize={12}
                fontWeight="400"
                color={colors.black.dark}
                marginBottom={16}
              />
              <View
                paddingVertical={4}
                paddingHorizontal={16}
                backgroundColor={backgroundColorTypeStatus[status]}
                borderRadius={20}>
                <Text
                  label={status}
                  fontSize={10}
                  fontWeight="400"
                  color={colors.white.regular}
                  textAlign="center"
                />
              </View>
            </View>

            <View flex={7} alignItems="flex-end">
              <Text
                label={strings.classificationResults.actual}
                fontSize={12}
                fontWeight="400"
                color={colors.black.dark}
                marginRight={75}
              />

              <SelectDropdown
                onValueChange={(itemValue: any, itemIndex: number) =>
                  onActualChange && onActualChange(itemValue, itemIndex, item)
                }
                selectedValue={actual}
                item={actualItem}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
