import axios from "axios";

import {
  GET_GAMES,
  CREATE_GAMES,
  FILTER_GENRES,
  ORDER_GAMES,
  RESET_GAMES,
} from "./actions.types.js";

export function getGames() {
  return async function (dispatch) {
    const response = await axios(
      "http://localhost:3001/game"
    );
    console.log(response.data);
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

export function resetGames() {
  return async function (dispatch) {
    return dispatch({
      type: RESET_GAMES,
    });
  };
}
