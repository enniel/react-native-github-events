import { EVENTS_STORE_KEY } from './constants';
import type { GlobalState } from './types';

const getEventsState = (state: GlobalState) => state[EVENTS_STORE_KEY];

export const getAllEvents = (state: GlobalState) => getEventsState(state).items;

export const getEventById = (id: string) => (state: GlobalState) => {
  const items = getAllEvents(state);
  return items.find(item => item.id === id);
};

export const getIsPending = (state: GlobalState) =>
  getEventsState(state).isPending;

export const getError = (state: GlobalState) => getEventsState(state).error;
