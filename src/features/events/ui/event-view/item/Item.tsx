import { View, Text } from 'react-native';
import { styles } from './styles';
import type { ItemProps } from './types';

export const Item = ({ label, text }: ItemProps) => (
  <View style={styles.wrapper}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.text}>{text}</Text>
  </View>
);
