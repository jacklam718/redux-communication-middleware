## Redux Network Middleware

A redux  network middleware for handling api call and response.

### Installation
`yarn add redux-network-middleware`

### Usage - Api Middleware
```javascript
import { applyMiddleware, createStore } from 'redux';

// api middleware with default api client
import { apiMiddleware } from 'redux-network-middleware'
const store = createStore(
  reducer,
  applyMiddleware(apiMiddleware),
);
```
Or you can create your own network middleware with custom
```javascript
import { applyMiddleware, createStore } from 'redux';

// api middleware with custom api client
import { apiMiddlewareFactory } from 'redux-network-middleware'

const api = (options) => {
  return fetch(options)
}

const store = createStore(
  reducer,
  applyMiddleware(apiMiddlewareFactory(api)),
);
```

### Example - Basic
#### Import
```javascript
import { API_GET, asyncActionType } from 'redux-network-middleware';
```
#### Constant
```javascript
// create a async action type
const FETCH_USER_PROFILE = asyncActionType('FETCH_USER_PROFILE');
```

#### Action
```javascript
const fetchUserProfile = (id) => ({
  type: API_GET,
  payload: {
    endpoin: 'https://example.com/user/',
    data: {
      id,
    },
    next: FETCH_USER_PROFILE,
  },
});
```

#### Reducer
```javascript
const initState = {
  error: null,
  pending: false,
};

const user = (state = initState, action) => {
  switch (action.type) {
    case FETCH_USER_PROFILE.PENDING: {
      return {
        pending: true,
      };
    }
    case FETCH_USER_PROFILE.SUCCESS: {
      return {
        ...action.payload,
        pending: false,
      };
    }
    case FETCH_USER_PROFILE.ERROR: {
      return {
        error: action.payload,
        pending: false,
      };
    }
    default:
      return state;
  }
};
```
