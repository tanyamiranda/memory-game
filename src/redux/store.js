import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './root-reducer';
import rootSaga from './root-sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewareList = getDefaultMiddleware({
      thunk: false,
      serializableCheck: false, // Prevents saga actions from throwing serializability warnings
    }).concat(sagaMiddleware);

    if (process.env.NODE_ENV === 'development') {
      return middlewareList.concat(logger);
    }

    return middlewareList;
  },
});

sagaMiddleware.run(rootSaga);

export default { store };