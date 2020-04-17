// Root Reducer
import { combineReducers } from "redux";

import { movieReducer } from "./movie/reducers";

export const rootReducer = combineReducers({
  movies: movieReducer
});

export type RootState = ReturnType<typeof rootReducer>;