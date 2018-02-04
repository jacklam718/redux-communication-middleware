// @flow

import requester from './requester';
import createDispatcher from './createDispatcher';
import { API } from './constants';

/*
  A apiMiddleware support action callbacks and centralized all api success, error handling strategy
*/
export const apiMiddlewareFactory = (api: (any) => Promise<Object>): Function => (
  ({ dispatch }) => next => (action) => {
    // handle all api calls
    if (API === action.type) {
      const dispatcher = createDispatcher(dispatch, action);
      dispatcher.start();

      api({ ...action.payload })
        .then(dispatcher.success)
        .then(dispatcher.notify)
        .catch(dispatcher.error);
    }

    next(action);
  }
);

export default apiMiddlewareFactory(requester);
