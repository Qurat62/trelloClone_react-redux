import { CONSTANTS } from "./../actions/types";
// let listID = 2;
//   let   cardID = 6;

const initialState = {
  "list-00": {
    listID: "list-00",
    cards: ["card-00"],
    listTitle: "myList",
    boardID: "board-00",
  },
};


const listsReducer = (state = initialState, action) => {
  
  switch (action.type) {
    
    case CONSTANTS.ADD_LIST: {
      const { listTitle, listID, boardID } = action.payload;
      const newList = {
        listTitle,
        listID,
        cards: [],
        boardID,
      };
      
     
      return {...state, [listID]: newList };
    }

    // case CONSTANTS.ADD_CARD: {
    //   const { listID, cardID,text } = action.payload;
    //   const list = state[listID];
    //   list.card.push(cardID);
    //   return { ...state, [listID]: list };
    // }
    case CONSTANTS.EDIT_LIST_TITLE: {
    debugger;
      const { listID, newListTitle } = action.payload;
      const newState = state;
      return newState;
  
    }
    case CONSTANTS.DELETE_LIST: {
    
      const { listID, boardID } = action.payload;
      // console.log("ListReducer: delete list: ", listID);
      const newState={ ...state };
      delete newState[listID];
      return newState;
    }

 
    case CONSTANTS.DRAG_CARD:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type,
      } = action.payload;
     // const newState = [...state];
      if (type === "list") {
        return state;
      }
      // if(type==="list")
      // {
      //   //grab the list from newState. newState is an array of list
      //   const pickListBox=newState.splice(droppableIndexStart,1);
      //   newState.splice(droppableIndexEnd,0,...pickListBox);
      //   return newState;
      // }
      //in same list
      // if (droppableIdStart === droppableIdEnd) {
        
      //   const list = state.find((list) => droppableIdStart === list.id);
      //   //from droppableIndexEnd we need to remove one item
      //   const card = list.cards.splice(droppableIndexStart, 1); 
    
      //   list.cards.splice(droppableIndexEnd, 0, ...card);
      // }

      if(droppableIdStart !== droppableIdEnd)
      {
        //other list in which we need to move
        const nextListStart=state.find((list) => droppableIdStart === list.id);
        //find the list from where card is dragged
        const card =nextListStart.cards.splice(droppableIndexStart,1);
        //find the list where dragged item will be placed
        const nextListEnd=state.find((list=>droppableIdEnd===list.id));
        //put the card in the new list
        nextListEnd.cards.splice(droppableIndexEnd,0,...card);
      }
      // return newState;
          // in the same list
          if (droppableIdStart === droppableIdEnd) {
            const list = state[droppableIdStart];
            const card = list.cards.splice(droppableIndexStart, 1);
            list.cards.splice(droppableIndexEnd, 0, ...card);
            return { ...state, [droppableIdStart]: list };
          } else {
            const startList = state[droppableIdStart];
            const card = startList.cards.splice(droppableIndexStart, 1);
            const endList = state[droppableIdEnd];
            endList.cards.splice(droppableIndexEnd, 0, ...card);
            return {
              ...state,
              [droppableIdStart]: startList,
              [droppableIdEnd]: endList,
            };
          }
    default:
      return state;
  }
};
export default listsReducer;
