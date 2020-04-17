// Types
export interface MovieInterface {
  adult: boolean;
  favorite: boolean;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  backdrop_path?: string;
  poster_path?: string;
};

export interface MovieFiltersInterface {
  key: string | undefined;
  year: number;
  sort_by: string;
};

export interface MovieState {
  results: MovieInterface[] | null;
  isFetching: boolean;
  isLoaded: boolean;
};

// Actions
export const ADD_MOVIES = "ADD_MOVIES";
export const FETCH_MOVIES = "FETCH_MOVIES";
export const REQUEST_MOVIES = "REQUEST_MOVIES";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export interface AddMoviesAction {
  type: typeof ADD_MOVIES;
  movies: MovieInterface[];
  isFetching: boolean;
  isLoaded: boolean;
};

export interface FetchMoviesAction {
  type: typeof FETCH_MOVIES;
}

export interface RequestMoviesAction {
  type: typeof REQUEST_MOVIES;
}

export interface ToggleFavoriteAction {
  type: typeof TOGGLE_FAVORITE;
  id: number;
};

// We can chain action types with | to utilize union types.
export type MovieActionTypes = AddMoviesAction | FetchMoviesAction | RequestMoviesAction | ToggleFavoriteAction;