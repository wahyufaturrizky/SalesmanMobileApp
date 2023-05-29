import React from 'react';
import {useWatch} from 'react-hook-form';
import {SlideModalInterface} from '../interface/common.interface';
import {colors} from '../style/color';
import {strings} from '../translation';
import {Button} from './Button';
import {Checkbox} from './Checkbox';
import {Modal} from './Modal';
import {Text} from './Text';
import {TouchableOpacity} from './TouchableOpacity';
import {View} from './View';

export const ModalMultipleCheckBox = ({
  visible,
  transparent,
  animationType,
  onPrimaryActionBtn,
  onSecondaryActionBtn,
  items,
  setValue,
  getValues,
  control,
}: {
  visible?: boolean;
  transparent?: boolean;
  animationType?: SlideModalInterface;
  onPrimaryActionBtn?: () => void;
  onSecondaryActionBtn?: () => void;
  onChange?: () => void;
  items?: any;
  setValue?: any;
  getValues?: any;
  control?: any;
}) => {
  useWatch({
    control,
    name: 'grading_result.optionMatang',
  });

  return (
    <Modal
      animationType={animationType}
      transparent={transparent}
      visible={visible}>
      <Text
        label="Silahkan Pilih"
        fontSize={18}
        fontWeight="600"
        color={colors.black.regular}
        marginBottom={12}
      />

      {items?.data?.option?.map((data: any, index: any) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            if (getValues('grading_result.optionMatang')?.includes(data)) {
              setValue(
                'grading_result.optionMatang',
                getValues('grading_result.optionMatang').filter(
                  (filtering: any) => filtering !== data,
                ),
              );
            } else {
              setValue('grading_result.optionMatang', [
                ...getValues('grading_result.optionMatang'),
                data,
              ]);
            }
          }}>
          <View
            alignItems="center"
            flexDirection="row"
            justifyContent="space-between"
            marginBottom={16}>
            <Text
              label={data}
              fontSize={18}
              fontWeight="600"
              color={colors.green.regular}
            />

            <Checkbox
              value={getValues('grading_result.optionMatang').includes(data)}
            />
          </View>
        </TouchableOpacity>
      ))}

      <Button
        backgroundColor={
          getValues('grading_result.optionMatang').length
            ? colors.green.regular
            : colors.green.lighter
        }
        label={strings.common.confirm}
        labelColor={colors.white.regular}
        sizeLabel={20}
        textTransform="capitalize"
        marginBottom={12}
        onPress={onPrimaryActionBtn}
        disabled={!getValues('grading_result.optionMatang').length}
      />

      <Button
        label={strings.common.cancel}
        labelColor={colors.black.regular}
        onPress={onSecondaryActionBtn}
        sizeLabel={20}
      />
    </Modal>
  );
};
