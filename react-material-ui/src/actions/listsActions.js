import { CONSTANTS } from "./types";
import uuid from "react-uuid";
// getState gets the cureent state 
//dispatch is used to change the state of application
export function addList (listTitle)  {

  return ((dispatch, getState )=> {
    dispatch({
      type: CONSTANTS.ADD_LIST,
      payload: {
        listTitle,
        boardID: getState().currentBoard.boardID,
        listID: uuid(),
      },
    });
  });
};
export const editListTitle = (listID, newListTitle) => {
  return {
    type: CONSTANTS.EDIT_LIST_TITLE,
    payload: {
      listID,
      newListTitle,
    },
  };
};
export function deleteList(listID, boardID)
{
  debugger;
  return {
    type: CONSTANTS.DELETE_LIST,
    payload: { listID, boardID },
  };
};
// export const deleteList = (listID) => {
//   console.log("List Actions: delete list: ", listID);
//   return (dispatch, getState) => {
//      dispatch({
//       type: CONSTANTS.DELETE_LIST,
//       payload: {
//         listID,
//         boardID: getState().currentBoard.boardID,
//       },
//     });
//   };
// };

// export function addList(listTitle)

//  {
//    debugger;
//      return{
//         type: CONSTANTS.ADD_LIST,
//         payload: {
//                   listTitle,
//                   listID: uuid(),
//                 },
//      }
//  }
   

  export function sortCardsOrder (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
    type
  )  {
    return (dispatch, getState) => {
      dispatch({
        type: CONSTANTS.DRAG_CARD,
        payload: {
          droppableIdStart,
          droppableIdEnd,
          droppableIndexStart,
          droppableIndexEnd,
          draggableId,
          type,
          boardID: getState().currentBoard.boardID,
        },
      });
    };
  }; 