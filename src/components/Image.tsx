import React from 'react';

import {Image as RNImage, ImageResizeMode} from 'react-native';
import {View} from './View';

export const Image = ({
  source,
  size,
  resizeMode,
}: {
  source?: any;
  size?: number;
  resizeMode?: ImageResizeMode;
}) => {
  return (
    <View>
      <RNImage
        style={{width: size, height: size, resizeMode: resizeMode}}
        source={source}
      />
    </View>
  );
};
