import { combineReducers } from "redux";
import boardReducer from "./boardReducer";
import listsReducer from "./listsReducer";
import cardReducer from "./cardReducer";
import currentBoardReducer from "./currentBoardReducer";



export default combineReducers({
  lists: listsReducer,
  boards: boardReducer,
  currentBoard: currentBoardReducer,
 cards: cardReducer,
});


