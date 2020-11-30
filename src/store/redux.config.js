import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reducers from './reducers';
import rootSaga from './sagas';
// import { persistStore } from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware, logger),
);

// const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store }