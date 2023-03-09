export interface EventsListProps {
  onItemPress: (eventId: string) => void;
  needRefetch: boolean;
}
