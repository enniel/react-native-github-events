import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { middlewares } from './middlewares';
import { rootReducer } from './rootReducer';

const middlewareEnhancer = applyMiddleware(...middlewares);
const composedEnhancers = compose(middlewareEnhancer);

export const store = createStore(rootReducer, undefined, composedEnhancers);
