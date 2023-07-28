import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from '@redux-saga/core';
import customerListReducer from '../slices/customerListSlice/customerListSlice';
import customerReducer from '../slices/customerSlice/customerSlice';
import orderReducer from '../slices/orderSlice/orderSlice';
import itemsReducer from '../slices/itemsSlice/itemsSlice';
import lineItemsReducer from '../slices/lineItemsSlice/lineItemsSlice';
import rootSaga from '../sagas/rootSaga';

export const reducers = combineReducers({
  customerList: customerListReducer,
  customer: customerReducer,
  order: orderReducer,
  items: itemsReducer,
  lineItems: lineItemsReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  middleware: [sagaMiddleware],
  reducer: persistedReducer,
  devTools: true,
});

sagaMiddleware.run(rootSaga);

const persister = persistStore(store);

export { persister, store };
export type RootState = ReturnType<typeof store.getState>;
