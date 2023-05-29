import React, {ComponentType, JSXElementConstructor, ReactElement} from 'react';
import {
  FlatList as RNFlatList,
  ListRenderItem,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

export const FlatList = ({
  data,
  renderItem,
  ListHeaderComponent,
  ListFooterComponent,
  ListEmptyComponent,
  onEndReachedThreshold,
  onEndReached,
  keyExtractor,
  extraData,
}: {
  data?: any[];
  renderItem?: ListRenderItem<any> | null;
  ListHeaderComponent?:
    | ComponentType<any>
    | ReactElement<any, string | JSXElementConstructor<any>>
    | null;
  ListFooterComponent?:
    | ComponentType<any>
    | ReactElement<any, string | JSXElementConstructor<any>>
    | null;
  ListEmptyComponent?:
    | ComponentType<any>
    | ReactElement<any, string | JSXElementConstructor<any>>
    | null;
  onEndReachedThreshold?: number | null;
  extraData?: any;
  keyExtractor?: (item: any, index: number) => string | number;
  onEndReached?: ((info: {distanceFromEnd: number}) => void) | null;
}) => {
  return (
    <RNFlatList
      contentContainerStyle={styles.contentContainerStyle}
      data={data}
      renderItem={renderItem}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      ListEmptyComponent={ListEmptyComponent}
      onEndReachedThreshold={onEndReachedThreshold}
      onEndReached={onEndReached}
      keyExtractor={keyExtractor}
      extraData={extraData}
    />
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
  },
});
