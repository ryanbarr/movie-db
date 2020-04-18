// Root Reducer
import { combineReducers } from "redux";

import { movieReducer } from "./movie/reducers";
import { MovieState } from "./movie/types";

export interface AppStateInterface {
  movies: MovieState;
};

export const rootReducer = combineReducers({
  movies: movieReducer
});

export type RootState = ReturnType<typeof rootReducer>;