## Redux Network Middleware

A redux  network middleware for handling api call and response.

### Installation
`yarn add redux-network-middleware`

### Usage
```
import { applyMiddleware, createStore } from 'redux';

// Network middleware with default api client
import network from 'redux-network-middleware'
const store = createStore(
  reducer,
  applyMiddleware(network),
);
```
Or you can create your own network middleware with custom
```
import { applyMiddleware, createStore } from 'redux';

// Network middleware with custom api client
import { apiMiddlewareFactory } from 'redux-network-middleware'

const api = (options) => {
  return fetch(options)
}

const store = createStore(
  reducer,
  applyMiddleware(api),
);
```
