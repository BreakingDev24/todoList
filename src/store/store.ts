import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import todoReducer from "../features/todoSlice.ts";
import sideListReducer from "../features/openSideList.ts";

const persistConfig = {
  key: "todo",
  storage,
};
const rootReducer = combineReducers({
  todo: persistReducer(persistConfig, todoReducer),
  sideList: sideListReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.MODE !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PAUSE",
          "persist/FLUSH",
          "persist/PURGE",
          "persist/REGISTER",
        ],
      },
    }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
