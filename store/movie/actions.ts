import fetch from "cross-fetch";
import { Dispatch, Action } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

import {
  MovieState,
  MovieInterface,
  MovieFiltersInterface,
  MovieActionTypes,
  ADD_MOVIES,
  REQUEST_MOVIES,
  TOGGLE_FAVORITE
} from "./types";

export type MovieResult<R> = ThunkAction<R, MovieState, undefined, Action>;
export type MovieDispatch = ThunkDispatch<MovieState, undefined, Action>;

export function addMovies(movies: MovieInterface[]): MovieActionTypes {
  return {
    type: ADD_MOVIES,
    movies,
    isFetching: false,
    isLoaded: true
  };
}

export const fetchMovies = (): MovieResult<Promise<boolean>> => {
  return (dispatch: Dispatch) => {
    const filters: MovieFiltersInterface = {
      key: process.env.MOVIEDB_KEY,
      year: 2016,
      sort_by: "popularity.desc"
    };

    // Update the state to indicate that we're loading.
    dispatch(requestMovies());

    // Grab the API data.
    return fetch(`http://api.themoviedb.org/3/discover/movie?api_key=${filters.key}&year=${filters.year}&sort_by=${filters.sort_by}`)
      .then(response => response.json())
      .then(data => {
        dispatch(addMovies(data.results));
        return data.results;
      });
  }
}

export function requestMovies() {
  return {
    type: REQUEST_MOVIES,
    isFetching: true
  };
}

export function toggleFavorite(movie: MovieInterface): MovieActionTypes {
  return {
    type: TOGGLE_FAVORITE,
    id: movie.id
  };
}