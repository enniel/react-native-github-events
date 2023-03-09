import { useCallback } from 'react';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { EventsList } from '@root/features/events';
import { Screens, RootNavigationProp } from '@root/shared/types';

export const EventsListScreen = () => {
  const navigation = useNavigation<RootNavigationProp>();
  const isFocused = useIsFocused();

  const onItemPress = useCallback(
    (eventId: string) => {
      navigation.navigate(Screens.EventView, { eventId });
    },
    [navigation],
  );

  return <EventsList onItemPress={onItemPress} needRefetch={isFocused} />;
};
