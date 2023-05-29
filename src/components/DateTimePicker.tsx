import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import moment from 'moment';
import React, {useState} from 'react';
import {Controller} from 'react-hook-form';
import {
  DateTimePickerDisplayInterface,
  DateTimePickerInterface,
} from '../interface/common.interface';
import {colors} from '../style/color';
import {Button} from './Button';
import {Text} from './Text';
import {View} from './View';

export const CompDateTimePicker = ({
  mode,
  display,
  marginBottom,
  labelFontSize,
  labelColor,
  label,
  control,
  rules,
  name,
  borderColor,
  borderWidth,
  borderRadius,
}: {
  mode?: DateTimePickerInterface | any;
  display?: DateTimePickerDisplayInterface;
  marginBottom?: number;
  labelFontSize?: number;
  borderWidth?: number;
  borderRadius?: number;
  labelColor?: string;
  name: string;
  label?: string;
  borderColor?: string;
  control?: any;
  rules?: any;
}) => {
  const [isShowDatePicker, setIsShowDatePicker] = useState<boolean>(false);
  return (
    <View marginBottom={marginBottom}>
      <Text
        marginBottom={4}
        fontWeight="700"
        fontSize={labelFontSize}
        color={labelColor}
        label={label}
      />

      <Controller
        control={control}
        rules={rules}
        render={({field: {onChange, value}, fieldState: {error}}: any) => (
          <View>
            <Button
              backgroundColor={colors.white.regular}
              label={moment(value).format('DD/MM/YYYY')}
              labelColor={colors.black.regular}
              onPress={() => setIsShowDatePicker(true)}
              sizeLabel={14}
              borderColor={borderColor}
              borderWidth={borderWidth}
              borderRadius={borderRadius}
              textAlign="flex-start"
              padding={16}
            />

            {error && (
              <Text
                fontWeight="400"
                color={colors.red.regular}
                label={error.message}
                marginTop={4}
              />
            )}

            {isShowDatePicker && (
              <DateTimePicker
                value={value}
                onChange={(event: DateTimePickerEvent, date?: Date) => {
                  if (date) {
                    onChange(date);
                    setIsShowDatePicker(false);
                  }
                }}
                display={display}
                mode={mode}
              />
            )}
          </View>
        )}
        name={name}
      />
    </View>
  );
};
