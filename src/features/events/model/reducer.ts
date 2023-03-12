import {
  EVENTS_LOAD_PENDING,
  EVENTS_LOAD_SUCCESS,
  EVENTS_LOAD_ERROR,
} from './constants';
import type {
  Events,
  EventsAction,
  EventsActionError,
  EventsActionSuccess,
} from './types';

const INIT_STATE: Events = {
  items: [],
  isPending: false,
  error: null,
};

export const reducer = (state = INIT_STATE, action: EventsAction) => {
  switch (action.type) {
    case EVENTS_LOAD_PENDING:
      return {
        ...state,
        isPending: true,
      };

    case EVENTS_LOAD_SUCCESS:
      return {
        ...state,
        isPending: false,
        items: [...(action as EventsActionSuccess).payload],
        error: null,
      };

    case EVENTS_LOAD_ERROR:
      return {
        ...state,
        isPending: false,
        error: (action as EventsActionError).payload,
      };

    default:
      return state;
  }
};
