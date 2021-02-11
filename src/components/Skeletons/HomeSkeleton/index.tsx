import React from 'react';
import { View } from 'react-native';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const HomeSkeleton: React.FC = () => {
  return (
    <SkeletonPlaceholder backgroundColor="#dedede" highlightColor="#fcfcfc">
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <View
          style={{
            width: 370,
            height: 100,
            borderRadius: 10,
            marginBottom: 10,
          }}
        />

        <View
          style={{
            width: 370,
            height: 100,
            borderRadius: 10,
            marginBottom: 10,
          }}
        />

        <View
          style={{
            width: 370,
            height: 100,
            borderRadius: 10,
            marginBottom: 10,
          }}
        />

        <View
          style={{
            width: 370,
            height: 100,
            borderRadius: 10,
            marginBottom: 10,
          }}
        />

        <View
          style={{
            width: 370,
            height: 100,
            borderRadius: 10,
            marginBottom: 10,
          }}
        />

        <View
          style={{
            width: 370,
            height: 100,
            borderRadius: 10,
            marginBottom: 10,
          }}
        />

        <View
          style={{
            width: 370,
            height: 100,
            borderRadius: 10,
            marginBottom: 10,
          }}
        />

        <View
          style={{
            width: 370,
            height: 100,
            borderRadius: 10,
            marginBottom: 10,
          }}
        />
      </View>
    </SkeletonPlaceholder>
  );
};

export default HomeSkeleton;
