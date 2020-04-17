import { MovieState, MovieActionTypes, TOGGLE_FAVORITE, ADD_MOVIES } from "./types";

const initialState: MovieState = {
  results: null,
  isFetching: false,
  isLoaded: false
};

export function movieReducer(
  state = initialState,
  action: MovieActionTypes
): MovieState {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        results: action.movies
      };
    case TOGGLE_FAVORITE:
      return {
        ...state,
        results: state.results && state.results.map(movie => {
          (movie.id === action.id) ? movie.favorite = !movie.favorite : movie.favorite;
          return movie;
        })
      };
    default:
      return state;
  }
}