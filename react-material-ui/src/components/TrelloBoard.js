import React, { Component, useEffect } from "react";
//import './App.css';
import "../styles.css";
import _ from "lodash";
import { connect } from "react-redux";
import TrelloList from "../components/TrelloList";
import TrelloButton from "../components/TrelloButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sortCardsOrder } from "../actions/listsActions";
import { setCurrentBoard } from "../actions/boardActions";

const TrelloBoard = (props) => {
  const { boardID } = props.match.params;
  useEffect(() => {
    const { boardID } = props.match.params;

    props.dispatch(setCurrentBoard(boardID));
  }, [boardID]);

  //synchronously update the drag and drop state
  const onDragEnd = (result) => {
    debugger;
    //rendering logic
    // destination and source objects contains the infor  that where the draggable  started and where it is ended
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }
    props.dispatch(
      sortCardsOrder(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };
  const { lists, cards, boards } = props;

  const board = boards[boardID];
  const mergeList = _.assign(boards[boardID].lists, lists);
  //const mergeCards=_.merge(boards[boardID].lists[cards],cards);

  if (!board) return <h1 style={{ textAlign: "center" }}>Board not found!</h1>;
  const listOrder = _.values(mergeList);
  // const cardOrder=_.values(mergeCards);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <h2>{board.boardTitle}</h2>
      <Droppable droppableId="all-lists" direction="horizontal" type="list">
        {(provided) => (
          <div
            className="listContainer"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {Object.keys(listOrder).map((key, index) => {
              const list = listOrder[key];

              console.log("object keys list", list);

              if (list) {
                const listCards = Object.keys(cards).map((key) => cards[key]);
                console.log("object keys cards", listCards[key]);

                // const listCards = list.cards.map((cardID) => cards[cardID]);
                return (
                  <TrelloList
                    key={listOrder[key].listID}
                    listID={listOrder[key].listID}
                    title={listOrder[key].listTitle}
                    cards={listCards}
                    index={index}
                    boardID={boardID}
                  />
                );
              }
            })}

            {provided.placeholder}

            <TrelloButton list boardID />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const mapStateToProps = (state) => ({
  boards: state.boards,
  currentBoard: state.currentBoard,
  lists: state.lists,
  cards: state.cards,
});

export default connect(mapStateToProps)(TrelloBoard);
