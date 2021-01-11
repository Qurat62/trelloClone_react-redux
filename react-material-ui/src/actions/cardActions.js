import { CONSTANTS } from "./types";
import uuid from "react-uuid";

export function  addCard (listID, text,boardID) {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { 
      text, 
      listID,
      boardID,
     cardID: uuid() },
  };
};
   

  export function editCard  (cardID, listID, cardText)
   {
     debugger;
    return {
      type: CONSTANTS.EDIT_CARD,
      payload: { cardID, listID, cardText },
    };
  };
  
  export function deleteCard(cardID, listID)
  {
    return {
      type: CONSTANTS.DELETE_CARD,
      payload: { cardID, listID },
    };
  };
