import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { LoaderProps } from './Loader.types';
import { styles } from './Loader.styles';

const Loader: React.FC<LoaderProps> = ({ size = 40, color = '#007AFF', style }) => {
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loader;
