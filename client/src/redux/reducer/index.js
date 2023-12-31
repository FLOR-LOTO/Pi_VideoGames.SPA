import {
  GET_GAMES,
  CREATE_GAMES,
  FILTER_GENRES,
  ORDER_GAMES,
  RESET_GAMES
} from "../actions/actions.types";

let initialState = {
  allGames: [],
  createGame: [],
  filterGenres: [],
  orderGames: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        allGames: action.payload, //la respuesta que dio el endpoint
      };

    case CREATE_GAMES:
      return {
        ...state,
        crateGames: action.payload,
      };

    case FILTER_GENRES:
      return {
        ...state,
        filterGenres: action.payload,
      };

    case ORDER_GAMES:
      return {
        ...state,
        orderGames: action.payload,
      };
    case RESET_GAMES:
      return initialState; // Esto restaura el estado al valor inicial

    default:
      return state;
  }
}

export default rootReducer;
