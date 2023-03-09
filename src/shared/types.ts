import type { RouteProp, NavigationProp } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

export enum Screens {
  EventsList = 'EventsList',
  EventView = 'EventView',
}

export type RootStackScreenParamList = {
  [Screens.EventsList]: undefined;
  [Screens.EventView]: {
    eventId: string;
  };
};

export type RootNavigationProp = NavigationProp<RootStackScreenParamList>;

export type EventViewScreenRouteProp = RouteProp<
  RootStackScreenParamList,
  Screens.EventView
>;

export type EventsListScreenRouteProp = RouteProp<
  RootStackScreenParamList,
  Screens.EventsList
>;

export type EventsListScreenProps = StackScreenProps<
  RootStackScreenParamList,
  Screens.EventsList
>;
