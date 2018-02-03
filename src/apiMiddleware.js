import requester from './requester';
import createDispatcher from './createDispatcher';
import API from './constants';

/*
  A apiMiddleware support action callbacks and centralized all api success, error handling strategy
*/
export default ({ dispatch }) => next => (action) => {
  const dispatcher = createDispatcher(dispatch, action);

  // handle all api calls
  if (API === action.type) {
    dispatcher.start();

    requester({ ...action.payload })
      .then(dispatcher.success)
      .then(dispatcher.notify)
      .catch(({ message, response }) => dispatcher.error({
        status: response.status,
        message,
      }));
  }

  next(action);
};
