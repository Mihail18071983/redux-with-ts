import { configureStore } from "@reduxjs/toolkit";
import {createLogger} from "redux-logger"
import { api } from "./api/api";

import  favoriteReducer from "./favorites/favorite.slice";

const logger = createLogger({
  collapsed: true,
})
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    favorites: favoriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>
