
import React, { Component ,useState} from "react";
import _ from "lodash";
import { connect } from "react-redux";
import TrelloCard from "./TrelloCard";
import TrelloButton from "./TrelloButton";
import "../styles.css";
import {Droppable,Draggable} from "react-beautiful-dnd";
import Button from "@material-ui/core/Button";
import EditIcon from '@material-ui/icons/Edit';
import { deleteList,editListTitle } from "../actions/listsActions";


const TrelloList = React.memo(({ title, cards, listID ,boardID,index,dispatch}) => {
  
  
  console.log("trelloList",title);
  console.log("cards",cards);
  console.log("listID",listID);
  console.log("index",index);
  
  const [isEditing, setIsEditing] = useState(false);
  const [listTitle, setListTitle] = useState(title);
  const renderEditInput = () => {
    return (
      <form onSubmit={handleEditting}>
        <input
          type="text"
          value={listTitle}
          onChange={handleChange}
          autoFocus
          onFocus={handleFocus}
          onBlur={handleEditting}
        />
      </form>
    );
  };
  const handleEditting = e => {
    debugger;
    setIsEditing(false);
    
    dispatch(editListTitle(listID, listTitle));
  };
  const handleFocus = e => {
    e.target.select();
  };

  const handleChange = e => {
    e.preventDefault();
    setListTitle(e.target.value);
  };
  const handleDeleteList = (e) => {
    debugger;
    console.log("List: delete list: ", listID);
    dispatch(deleteList(listID,boardID));
    
  };
  return (

    //ref used to point to the dom node
    <Draggable draggableId={String(listID)} index={index}>
    {provided => (
      <div className="container"
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        <Droppable droppableId={String(listID)} type="card">
          {provided => (
            <div>
                <Button onMouseDown={handleDeleteList}>
                      Delete
                    </Button>
              <div>
                {isEditing ? (
                  renderEditInput()
                ) : (
                  <div className="titleContainer" >
                    <h3>{listTitle}</h3>
                    <Button  className="btnColorWhite"  onClick={() => setIsEditing(true)}>
                    {<EditIcon />} 
                    </Button>
                  
                    
                  </div>
                  
                )}
                
              </div>
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {
                  Object.keys(cards).map((key,index)=>
                  {
                    console.log("cards key id",cards[key]);
                    return(
                          <TrelloCard key={cards[key].cardID} text={cards[key].text} listID={cards[key].listID}
                          cardID={cards[key].cardID} index={index}
                          />
                    )
                  })
                }

                {/* {cards.map((card, index) => (
                  <TrelloCard
                    key={card.id}
                    text={card.text}
                    id={card.id}
                    index={index}
                    listID={listID}
                  />
                ))} */}
                {provided.placeholder}
                <TrelloButton listID={listID} boardID={boardID} />
              </div>
            </div>
          )}
        </Droppable>
      </div>
    )}
  </Draggable>
    
  );
});

export default connect()(TrelloList);



{/* <Draggable draggableId={String(listID)} index={index}>
    {
      provided=>(
<div className="container"
       {...provided.draggableProps}
       ref={provided.innerRef}
       {...provided.dragHandleProps}
       >
      <Droppable droppableId={String(listID)} >
      {provided=>(
       
         <div  {...provided.droppableProps}
         ref={provided.innerRef}>
      <h3>{title}</h3>
   
          {
            cards.map((card,index)=>
            <TrelloCard 
            key={card.id}
            index={index}
            text={card.text}
            id={card.id}
            />
            )} 
      <TrelloButton listID={listID} />
      {provided.placeholder}
    </div>
      )}
    </Droppable>
    </div>
      )
    }

    </Draggable> */}



