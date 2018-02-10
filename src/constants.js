// @flow

// async action types
export const asyncActionType = (type: string): Object => ({
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
  ERROR: `${type}_ERROR`,
});

export const API_START: string = 'API_START';
export const API_DONE: string = 'API_DONE';
export const API_GET: string = 'API_GET';
export const API_PUT: string = 'API_PUT';
export const API_POST: string = 'API_POST';
export const API_DELETE: string = 'API_DELETE';
