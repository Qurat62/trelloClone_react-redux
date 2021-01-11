
import { CONSTANTS } from "./../actions/types";
const currentBoardReducer = (state = null, action) => {
  switch (action.type) {
    case CONSTANTS.SET_CURRENT_BOARD: {
      return action.payload;
    }

    default:
      return state;
  }
};

export default currentBoardReducer;
