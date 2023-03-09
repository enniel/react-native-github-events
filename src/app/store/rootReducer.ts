import { combineReducers } from 'redux';
import { eventsReducer, EVENTS_STORE_KEY } from '@root/features/events';

export const rootReducer = combineReducers({
  [EVENTS_STORE_KEY]: eventsReducer,
});
