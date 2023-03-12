import { ScrollView, View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import SafeAreaView from 'react-native-safe-area-view';
import { Header } from '@root/shared/components/header';
import { Avatar } from '@root/shared/components/avatar';
import { getEventById } from '../../model/selectors';
import { Item } from './item';
import { styles } from './styles';
import type { EventViewProps } from './types';

export const EventView = ({ eventId, onBack }: EventViewProps) => {
  const event = useSelector(getEventById(eventId));

  if (!event) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Event View" onBack={onBack} />

      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <View style={styles.actor}>
          <Avatar uri={event.actor?.avatar_url} size={150} />

          <View style={styles.actorData}>
            <Text style={styles.actorName}>{event.actor?.login}</Text>
            <Text style={styles.actorUrl}>{event.actor?.url}</Text>
          </View>
        </View>

        <View style={styles.hr} />

        <Text style={styles.title}>Event:</Text>
        <Item label="Type" text={event.type} />
        <Item label="Is public" text={`${event.public}`} />
        <Item label="Created at" text={event.created_at} />
        <Item label="Repo name" text={event.repo?.name} />
        <Item label="Repo url" text={event.repo?.url} />
      </ScrollView>
    </SafeAreaView>
  );
};
