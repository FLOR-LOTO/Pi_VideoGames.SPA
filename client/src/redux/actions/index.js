import axios from "axios";

import {
  GET_GAMES,
  CREATE_GAMES,
  FILTER_GENRES,
  ORDER_GAMES,
} from "./actions.types.js";

export function getGames() {
  return async function (dispatch) {
    const response = await axios(
      "https://api.rawg.io/api/games?key=e435008397d04bd2a9e1156766b769d2&dates=2019-09-01,2019-09-30&platforms=18,1,7"
    );
    return dispatch({
      type: GET_GAMES,
      payload: response.data, // el payload es la informacion
    });
  };
}

export function createGames() {
  return async function (dispatch) {
    return dispatch({
      type: CREATE_GAMES,
    });
  };
}

export function filterGenres() {
  return async function (dispatch) {
    return dispatch({
      type: FILTER_GENRES,
    });
  };
}

export function orderGames() {
  return async function (dispatch) {
    return dispatch({
      type: ORDER_GAMES,
    });
  };
}
