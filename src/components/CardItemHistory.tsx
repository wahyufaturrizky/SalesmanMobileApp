import React from 'react';
import {colors} from '../style/color';
import {strings} from '../translation';
import {Image} from './Image';
import {Text} from './Text';
import {TouchableOpacity} from './TouchableOpacity';
import {View} from './View';

export const CardItemHistory = ({
  data,
  onPress,
}: {
  data?: any;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        borderBottomWidth={2}
        borderTopWidth={2}
        padding={24}
        borderBottomColor={colors.white.light}
        borderTopColor={colors.white.light}>
        <View
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="space-between">
          <View>
            <View
              backgroundColor={
                data.status === 'Completed'
                  ? colors.green.regular
                  : colors.yellow.regular
              }
              paddingVertical={4}
              paddingHorizontal={16}
              borderRadius={20}>
              <Text
                label={data.status}
                fontSize={12}
                fontWeight="400"
                color={colors.white.regular}
              />
            </View>
          </View>
          <View>
            <Image
              size={32}
              source={require('../assets/icons/arrow_forward.png')}
            />
          </View>
        </View>

        <View flexDirection="row" alignItems="center">
          <View>
            <Text
              label={strings.common.date}
              fontSize={14}
              fontWeight="400"
              color={colors.black.dark}
              marginBottom={4}
              textAlign="left"
            />
            <Text
              label={data.date}
              fontSize={14}
              fontWeight="700"
              color={colors.black.light}
              textAlign="left"
            />
          </View>

          <View marginLeft={32}>
            <Text
              label={strings.common.lastUpdated}
              fontSize={14}
              fontWeight="400"
              color={colors.black.dark}
              marginBottom={4}
              textAlign="left"
            />
            <Text
              label={data.lastUpdate}
              fontSize={14}
              fontWeight="700"
              color={colors.black.light}
              textAlign="left"
            />
          </View>

          <View marginLeft={32}>
            <Text
              label={strings.common.truckNumber}
              fontSize={14}
              fontWeight="400"
              color={colors.black.dark}
              marginBottom={4}
              textAlign="left"
            />
            <Text
              label={data.truck_no}
              fontSize={14}
              fontWeight="700"
              color={colors.black.light}
              textAlign="left"
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
