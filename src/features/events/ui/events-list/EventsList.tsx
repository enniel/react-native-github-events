import { useState, useMemo, ReactElement, useCallback } from 'react';
import { View, Pressable, Text } from 'react-native';
import { FlashList, ListRenderItem } from '@shopify/flash-list';
import SafeAreaView from 'react-native-safe-area-view';
import { LoadingIndicator } from '@root/shared/components/loading-indicator';
import { FullScreenLoading } from '@root/shared/components/fullscreen-loading';
import { RefreshIcon } from '@root/shared/components/refresh-icon';
import { Header } from '@root/shared/components/header';
import { Button } from '@root/shared/components/button';
import { useEvents, Event } from '../../state';
import { ListItem, ITEM_HEIGHT } from './list-item';
import { styles } from './styles';
import type { EventsListProps } from './types';

export const EventsList = ({ onItemPress, needRefetch }: EventsListProps) => {
  const [scrolling, setScrolling] = useState(false);

  const { items, isPending, refetchIsAllowed, refetch, isError } = useEvents({
    needRefetch,
    pauseUpdate: scrolling,
  });

  const onScrollBeginDrag = useCallback(() => {
    setScrolling(true);
  }, []);

  const onScrollEndDrag = useCallback(() => {
    setScrolling(false);
  }, []);

  const renderItem: ListRenderItem<Event> = useMemo(() => {
    return ({ item }) => {
      return (
        <ListItem
          eventId={item.id}
          eventType={item.type}
          avatarUrl={item.actor.avatar_url}
          displayLogin={item.actor.display_login}
          onPress={onItemPress}
        />
      );
    };
  }, [onItemPress]);

  const headerRight: ReactElement | undefined = useMemo(() => {
    if (items.length && isPending) {
      return (
        <View style={styles.headerButton}>
          <LoadingIndicator />
        </View>
      );
    }
    if (refetchIsAllowed) {
      return (
        <Pressable onPress={refetch} style={styles.headerButton}>
          <RefreshIcon />
        </Pressable>
      );
    }
    return undefined;
  }, [isPending, items.length, refetch, refetchIsAllowed]);

  const ListEmptyComponent: ReactElement | undefined = useMemo(() => {
    if (isError) {
      return (
        <View style={styles.errorView}>
          <Text style={styles.errorText}>
            Oh no! An error occurred while loading the data.
          </Text>
          <Button
            onPress={refetch}
            wrapperStyle={styles.reloadButton}
            text="Try again"
          />
        </View>
      );
    }
    if (isPending) {
      return <FullScreenLoading />;
    }
    return <FullScreenLoading />;
  }, [isError, isPending, refetch]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Events List" rightElement={headerRight} />
      <FlashList<Event>
        data={items}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        estimatedItemSize={ITEM_HEIGHT}
        onScrollBeginDrag={onScrollBeginDrag}
        onScrollEndDrag={onScrollEndDrag}
      />
    </SafeAreaView>
  );
};
