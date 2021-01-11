import { CONSTANTS } from "./types";
import uuid from "react-uuid";

export const addBoard = (boardTitle) => {
  return {
    type: CONSTANTS.ADD_BOARD,
    payload: {
      boardTitle,
      boardID: uuid(),
    },
  };
};

export const setCurrentBoard = (boardID) => {
  return {
    type: CONSTANTS.SET_CURRENT_BOARD,
    payload: {
      boardID,
    },
  };
};

export const deleteBoard = (boardID) => {
  return {
    type: CONSTANTS.DELETE_BOARD,
    payload: {
      boardID,
    },
  };
};
