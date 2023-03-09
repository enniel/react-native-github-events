import { useNavigation, useRoute } from '@react-navigation/native';
import { EventView } from '@root/features/events';
import { EventViewScreenRouteProp } from '@root/shared/types';
import { useCallback } from 'react';

export const EventViewScreen = () => {
  const navigation = useNavigation();

  const { params } = useRoute<EventViewScreenRouteProp>();

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return <EventView eventId={params.eventId} onBack={onBack} />;
};
