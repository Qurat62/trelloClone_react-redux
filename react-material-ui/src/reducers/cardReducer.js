import { CONSTANTS } from "./../actions/types";

const initialState = {
  "card-00": {
    text: "Curat Card",
    cardID: "card-00",
    listID: "list-00",
    boardID: "board-00",
  },
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_CARD: {
      debugger;
      const { text, listID, cardID,boardID } = action.payload;
      const newCard = {
        text,
        cardID,
        listID,
        boardID
      };
      return { ...state, [cardID]: newCard };
    }

    case CONSTANTS.EDIT_CARD: {
      const { cardID, listID, cardText } = action.payload;

      const newState = { ...state };
      const card = newState[cardID];
      card.text = cardText;
      return {
        ...state,
        [cardID]: card,
      };
    }

    case CONSTANTS.DELETE_CARD: {
      const { cardID, listID } = action.payload;
      const newState = { ...state };
      delete newState[cardID];
      return newState;
    }

    default:
      return state;
  }
};

export default cardReducer;
