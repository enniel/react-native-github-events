import { ThunkDispatch } from 'redux-thunk';

export interface Actor {
  // The unique identifier for the actor.
  id: string;
  // The username of the actor.
  login: string;
  // The specific display format of the username.
  display_login: string;
  // The unique identifier of the Gravatar profile for the actor.
  gravatar_id: string;
  // The REST API URL used to retrieve the user object, which includes additional user information.
  url: string;
  // The user avatar URL
  avatar_url: string;
}

export interface Repo {
  // The unique identifier of the repository.
  id: string;
  // The name of the repository, which includes the owner and repository name. For example, octocat/hello-world is the name of the hello-world repository owned by the octocat user account.
  name: string;
  // The REST API URL used to retrieve the repository object, which includes additional repository information.
  url: string;
}

export type Payload = Record<string, unknown>;

export interface Event {
  // Unique identifier for the event.
  id: string;
  // Indicates whether the event is public or not
  public: boolean;
  // Date the event was created
  created_at: string;
  // The type of event. Events uses PascalCase for the name.
  type:
    | 'CommitCommentEvent'
    | 'CreateEvent'
    | 'DeleteEvent'
    | 'ForkEvent'
    | 'GollumEvent'
    | 'IssueCommentEvent'
    | 'IssuesEvent'
    | 'MemberEvent'
    | 'PublicEvent'
    | 'PullRequestEvent'
    | 'PullRequestReviewEvent'
    | 'PullRequestReviewCommentEvent'
    | 'PushEvent'
    | 'ReleaseEvent'
    | 'SponsorshipEvent'
    | 'WatchEvent';
  // The user that triggered the event.
  actor: Actor;
  // The repository object where the event occurred.
  repo: Repo;
  // The event payload object is unique to the event type. See the event type below for the event API payload object.
  payload: Payload;
}

export interface Events {
  items: Event[];
  isPending: boolean;
  error?: string | null;
}

export interface GlobalState {
  events: Events;
}

export type EventsActionPendingType = '@events/load/pending';

export interface EventsActionPending {
  type: EventsActionPendingType;
}

export type EventsActionPendingFunc = () => EventsActionPending;

export type EventsActionSuccessType = '@events/load/success';

export interface EventsActionSuccess {
  type: EventsActionSuccessType;
  payload: Event[];
}

export type EventsActionSuccessFunc = (payload: Event[]) => EventsActionSuccess;

export type EventsActionErrorType = '@events/load/error';

export interface EventsActionError {
  type: EventsActionErrorType;
  payload: Error | string;
}

export type EventsActionErrorFunc = (
  payload: Error | string,
) => EventsActionError;

export type EventsAction =
  | EventsActionPending
  | EventsActionSuccess
  | EventsActionError;

export type EventsThunkDispatch = ThunkDispatch<
  GlobalState,
  undefined,
  EventsAction
>;

export interface UseEventsOptions {
  needRefetch: boolean;
  pauseUpdate: boolean;
}
