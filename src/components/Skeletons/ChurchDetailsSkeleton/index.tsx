import React from 'react';
import { View } from 'react-native';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const ChurchDetailsSkeleton: React.FC = () => {
  return (
    <SkeletonPlaceholder backgroundColor="#dedede" highlightColor="#fcfcfc">
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            marginBottom: 20,
          }}
        />

        <View
          style={{
            width: 332,
            height: 150,
            borderRadius: 10,
            marginBottom: 10,
          }}
        />

        <View
          style={{
            width: 332,
            height: 280,
            borderRadius: 10,
          }}
        />
      </View>
    </SkeletonPlaceholder>
  );
};

export default ChurchDetailsSkeleton;
