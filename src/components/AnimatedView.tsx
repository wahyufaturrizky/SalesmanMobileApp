import React, {useEffect, useRef} from 'react';
import {Animated as RNAnimated, StyleSheet} from 'react-native';

export const AnimatedView = () => {
  const shimmerValue = useRef(new RNAnimated.Value(0)).current;

  const startShimmerAnimation = () => {
    RNAnimated.loop(
      RNAnimated.sequence([
        RNAnimated.timing(shimmerValue, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        RNAnimated.timing(shimmerValue, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  useEffect(() => {
    startShimmerAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shimmerOpacity = shimmerValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.2, 0.5],
  });

  return (
    <RNAnimated.View style={[styles.shimmer, {opacity: shimmerOpacity}]} />
  );
};

const styles = StyleSheet.create({
  shimmer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
  },
});
