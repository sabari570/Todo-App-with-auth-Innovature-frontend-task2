import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
