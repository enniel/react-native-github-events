import { useMemo } from 'react';
import { Text, Pressable, StyleProp, ViewStyle } from 'react-native';
import { LoadingIndicator } from '@root/shared/components/loading-indicator';
import { styles } from './styles';

interface ButtonProps {
  text: string;
  onPress?: () => void;
  loading?: boolean;
  disabled?: boolean;
  wrapperStyle?: StyleProp<ViewStyle>;
}

export const Button = ({
  text,
  onPress,
  loading,
  disabled,
  wrapperStyle,
}: ButtonProps) => {
  const style = useMemo(() => {
    return [styles.button, wrapperStyle];
  }, [wrapperStyle]);

  return (
    <Pressable
      onPress={onPress}
      style={style}
      disabled={disabled}
      accessible
      accessibilityRole="button"
      accessibilityLabel={text}>
      {loading ? <LoadingIndicator /> : <Text style={styles.text}>{text}</Text>}
    </Pressable>
  );
};
