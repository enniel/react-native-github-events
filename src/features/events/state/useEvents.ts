import { useRef, useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTimer } from '@root/shared/hooks/useTimer';
import { eventsLoad } from './actions';
import { getAllEvents, getError, getIsPending } from './selectors';
import { TIMER_MANUAL, TIMER_AUTO } from './constants';
import type { EventsThunkDispatch, UseEventsOptions } from './types';

export const useEvents = (
  { needRefetch, pauseUpdate }: UseEventsOptions = {
    needRefetch: false,
    pauseUpdate: false,
  },
) => {
  const dispatch = useDispatch<EventsThunkDispatch>();
  const items = useSelector(getAllEvents);
  const isPending = useSelector(getIsPending);
  const error = useSelector(getError);
  const [refetchIsAllowed, setRefetchIsAllowed] = useState(false);

  const load = useCallback(() => {
    dispatch(eventsLoad());
    setRefetchIsAllowed(false);
    tick.current = 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refetch = useCallback(() => {
    if (refetchIsAllowed) {
      load();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetchIsAllowed]);

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tick = useRef(0);

  useTimer(
    () => {
      if (pauseUpdate) {
        return;
      }

      tick.current += 1;

      if (tick.current >= TIMER_AUTO) {
        refetch();
        return;
      }

      if (tick.current >= TIMER_MANUAL) {
        setRefetchIsAllowed(true);
      }
    },
    needRefetch ? 1000 : null,
  );

  useEffect(() => {
    if (needRefetch) {
      tick.current = 0;
    }
  }, [needRefetch]);

  return {
    items,
    isPending,
    refetchIsAllowed,
    error,
    isError: !!error,
    refetch,
  };
};
