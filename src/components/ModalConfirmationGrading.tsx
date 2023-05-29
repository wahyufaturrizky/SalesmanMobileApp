import React from 'react';

import {SlideModalInterface} from '../interface/common.interface';
import {colors} from '../style/color';
import {strings} from '../translation';
import {Button} from './Button';
import {Image} from './Image';
import {Modal} from './Modal';
import {Text} from './Text';
import {View} from './View';

export const ModalConfirmationGrading = ({
  visible,
  transparent,
  animationType,
  onPrimaryActionBtn,
  onSecondaryActionBtn,
  headerTitle,
  subtitle,
  truck_no,
  totalCountGrading,
  totalAccepted,
  totalRejected,
}: {
  visible?: boolean;
  transparent?: boolean;
  animationType?: SlideModalInterface;
  onPrimaryActionBtn?: () => void;
  onSecondaryActionBtn?: () => void;
  onChange?: () => void;
  headerTitle?: any;
  subtitle?: string;
  truck_no?: string;
  totalCountGrading?: number;
  totalAccepted?: number;
  totalRejected?: number;
}) => {
  return (
    <Modal
      animationType={animationType}
      transparent={transparent}
      visible={visible}>
      <View
        width={'100%'}
        flexDirection="row"
        alignItems="center"
        marginBottom={12}>
        <View width={'80%'}>
          <Text
            label={`${headerTitle} ${truck_no}?`}
            fontSize={18}
            fontWeight="600"
            color={colors.black.regular}
            marginBottom={12}
          />

          <Text
            label={subtitle}
            fontSize={14}
            fontWeight="400"
            color={colors.black.regular}
            marginBottom={12}
          />
        </View>

        <View width={'20%'} alignItems="center">
          <Image size={40} source={require('../assets/icons/ic_alert.png')} />
        </View>
      </View>

      <View
        flexDirection="row"
        justifyContent="space-between"
        marginBottom={12}
        alignItems="center">
        {[
          {
            name: strings.grading.totalCount,
            value: totalCountGrading,
          },
          {
            name: strings.grading.totalAccepted,
            value: totalAccepted,
          },
          {
            name: strings.grading.totalRejected,
            value: totalRejected,
          },
        ].map((data: any, index: any) => (
          <View key={index}>
            <Text
              label={data.name}
              fontSize={12}
              fontWeight="400"
              color={colors.black.regular}
              marginBottom={12}
              textAlign="center"
            />
            <Text
              label={data.value}
              fontSize={14}
              fontWeight="600"
              color={colors.black.regular}
              marginBottom={12}
              textAlign="center"
            />
          </View>
        ))}
      </View>

      <Button
        backgroundColor={colors.red.regular}
        label={strings.common.confirm}
        labelColor={colors.white.regular}
        sizeLabel={20}
        textTransform="capitalize"
        marginBottom={12}
        onPress={onPrimaryActionBtn}
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
