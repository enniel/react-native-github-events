import { StyleSheet, View } from 'react-native';
import Image from 'react-native-fast-image';
import colors from '@root/shared/theme/colors';

import type { AvatarProps } from './types';

export const Avatar = ({ uri, size }: AvatarProps) => {
  const styles = StyleSheet.create({
    image: {
      width: size,
      height: size,
      borderRadius: size,
    },
    imageEmpty: {
      backgroundColor: colors.grayLight,
    },
  });

  if (!uri) {
    return <View style={[styles.image, styles.imageEmpty]} />;
  }

  return <Image source={{ uri }} style={styles.image} />;
};
