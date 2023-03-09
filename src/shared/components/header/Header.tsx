import { View, Text, Pressable } from 'react-native';
import { ChevronLeft } from '../chevron-left';
import { styles } from './styles';
import type { HeaderProps } from './types';

export const Header = ({ title, onBack, rightElement }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {onBack ? (
        <View style={styles.left}>
          <Pressable style={styles.backButton} onPress={onBack}>
            <ChevronLeft />
          </Pressable>
        </View>
      ) : null}
      {rightElement ? <View style={styles.right}>{rightElement}</View> : null}
    </View>
  );
};
