import {Picker} from '@react-native-picker/picker';
import React, {LegacyRef} from 'react';
import {StyleSheet} from 'react-native';

export const SelectDropdown = ({
  pickerRef,
  selectedValue,
  onValueChange,
  item,
}: {
  pickerRef?: LegacyRef<Picker<any>>;
  selectedValue?: string;
  item?: {
    label: string;
    value: string;
  }[];
  onValueChange?: (itemValue: any, itemIndex: number) => void;
}) => {
  return (
    <Picker
      style={styles.container}
      ref={pickerRef}
      selectedValue={selectedValue}
      onValueChange={onValueChange}>
      {item?.map((data, index) => {
        const {label, value} = data;
        return <Picker.Item key={index} label={label} value={value} />;
      })}
    </Picker>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '60%',
  },
});
