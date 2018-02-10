// @flow

import requester from './requester';
import createDispatcher from './createDispatcher';
import { API_GET, API_POST, API_PUT, API_DELETE } from './constants';

const isApiAction = (type: string) => [API_GET, API_POST, API_PUT, API_DELETE].includes(type);
const apiTypeToMethod = (type: string) => {
  switch (type) {
    case API_POST: return 'POST';
    case API_PUT: return 'PUT';
    case API_DELETE: return 'DELETE';
    case API_GET:
    default: return 'GET';
  }
};

/*
  A apiMiddleware support action callbacks and centralized all api success, error handling strategy
*/
export const apiMiddlewareFactory = (api: (any) => Promise<Object>): Function => (
  ({ dispatch }) => next => (action) => {
    // handle all api calls
    if (isApiAction(action.type)) {
      const method = apiTypeToMethod(action.type);
      const dispatcher = createDispatcher(dispatch, action);
      dispatcher.start();
      api({ ...action.payload, method })
        .then(dispatcher.success)
        .then(dispatcher.notify)
        .catch(dispatcher.error);
    }

    next(action);
  }
);

export default apiMiddlewareFactory(requester);
