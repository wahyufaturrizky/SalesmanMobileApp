import React from 'react';
import {colors} from '../style/color';
import {Image} from './Image';
import {Text} from './Text';
import {TouchableOpacity} from './TouchableOpacity';
import {View} from './View';

export const CardItem = ({
  data,
  onPress,
}: {
  data?: any;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        flexDirection="row"
        padding={20}
        borderBottomColor={colors.white.light}
        alignItems="center"
        borderBottomWidth={2}
        justifyContent="space-between">
        <View>
          <Text
            label={data.truck_no}
            fontSize={16}
            fontWeight="700"
            color={colors.black.regular}
          />
        </View>
        <Image
          size={32}
          source={require('../assets/icons/arrow_forward.png')}
        />
      </View>
    </TouchableOpacity>
  );
};
