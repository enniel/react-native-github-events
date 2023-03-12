import { Dispatch } from 'redux';
import {
  EVENTS_LOAD_PENDING,
  EVENTS_LOAD_SUCCESS,
  EVENTS_LOAD_ERROR,
  ELEMENTS_PER_PAGE,
} from './constants';
import type {
  Event,
  EventsActionPendingFunc,
  EventsActionSuccessFunc,
  EventsActionErrorFunc,
  EventsAction,
} from './types';

export const eventsLoadPending: EventsActionPendingFunc = () => {
  return {
    type: EVENTS_LOAD_PENDING,
  };
};

export const eventsLoadSuccess: EventsActionSuccessFunc = (
  payload: Event[],
) => {
  return {
    type: EVENTS_LOAD_SUCCESS,
    payload,
  };
};

export const eventsLoadError: EventsActionErrorFunc = (
  payload: Error | string,
) => {
  return {
    type: EVENTS_LOAD_ERROR,
    payload,
  };
};

export const eventsLoad = () => async (dispatch: Dispatch<EventsAction>) => {
  dispatch(eventsLoadPending());

  try {
    // https://docs.github.com/en/rest/activity#list-public-events--parameters
    const response = await fetch(
      `https://api.github.com/events?per_page=${ELEMENTS_PER_PAGE}`,
      {
        headers: {
          accept: 'application/vnd.github+json',
        },
      },
    );
    const json = await response.json();

    dispatch(eventsLoadSuccess(json));
  } catch (err: unknown) {
    console.error(err);

    if (err instanceof Error) {
      dispatch(eventsLoadError(err.message));
    } else if (typeof err === 'string') {
      dispatch(eventsLoadError(err));
    }
  }
};
