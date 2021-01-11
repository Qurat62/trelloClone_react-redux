import { CONSTANTS } from "./../actions/types";

const initialState = {
  "board-00": {
    id: "board-00",
    lists: ["list-00"],
    boardTitle: "My Boards ",
  },
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_BOARD: {
      const { boardTitle, boardID } = action.payload;
      const newBoard = {
        boardID,
        boardTitle,
        lists: [],
      };
      return { ...state, [boardID]: newBoard };
    }

   

      case CONSTANTS.DELETE_BOARD:{
        
            const { boardID } = action.payload;
            const boards = { ...state };
            delete boards[boardID];
            return boards;
          
      }
    default:
      return state;
  }
};

export default boardReducer;
