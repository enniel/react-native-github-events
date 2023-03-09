import { useCallback } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Avatar } from '@root/shared/components/avatar';
import { styles } from './styles';

interface ListItemProps {
  eventId: string;
  avatarUrl: string;
  displayLogin: string;
  eventType: string;
  onPress(eventId: string): void;
}

export const ListItem = ({
  avatarUrl,
  displayLogin,
  eventId,
  eventType,
  onPress,
}: ListItemProps) => {
  const handlePress = useCallback(() => {
    onPress(eventId);
  }, [onPress, eventId]);

  return (
    <Pressable style={styles.wrapper} onPress={handlePress}>
      <Avatar uri={avatarUrl} size={40} />
      <View style={styles.content}>
        <Text style={styles.displayLogin}>{displayLogin}</Text>
        <Text style={styles.event}>{eventType}</Text>
      </View>
    </Pressable>
  );
};
