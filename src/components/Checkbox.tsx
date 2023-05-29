import React from 'react';
import {Image} from './Image';
import {View} from './View';

export const Checkbox = ({value}: {value: boolean}) => {
  return (
    <View>
      {value ? (
        <Image
          size={18}
          source={require('../assets/icons/checkbox_check.png')}
        />
      ) : (
        <Image
          size={18}
          source={require('../assets/icons/checkbox_uncheck.png')}
        />
      )}
    </View>
  );
};
