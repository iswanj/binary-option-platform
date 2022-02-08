import createSagaMiddleware from "redux-saga";
import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import converterReducer from "../features/converter/converterSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootSaga from "../saga";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  converter: converterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({
    thunk: false,
    serializableCheck: false,
  }),
  sagaMiddleware,
];

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
