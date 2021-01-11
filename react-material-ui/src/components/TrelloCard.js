import React, { Component,useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Divider from '@material-ui/core/Divider';
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../styles.css";
import { Draggable } from "react-beautiful-dnd";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { connect } from "react-redux";
import Textarea from "react-textarea-autosize";
import {editCard,deleteCard} from "../actions/cardActions";

export const TrelloCard =React.memo( ({ text, cardID,index,listID,dispatch }) => {
  console.log("id passed on trello card",cardID);
  const [edittingCard, setEdittingCard] = useState("");
  const [cardText, setText] = useState(text);
  const closeForm = (e) => {
    setEdittingCard(false);
    setText(text);
  };

  const handleCardInputChange = (e) => {
    
    setText(e.target.value);
  };

  const saveCard = (e) => {
  
    e.preventDefault();
    
  dispatch(editCard(cardID, listID, cardText));
    setEdittingCard(false);
  };
 

const handleDeleteCard = (e) => {

 dispatch(deleteCard(cardID, listID));
};


if (edittingCard)
return (
  <div>
  <Card className="cardTextArea">
  <Textarea
    className="textBox"
    type="text"
    autoFocus
    
    value={cardText}
    onChange={handleCardInputChange}
  ></Textarea>
</Card>
    <Button text="Save" onMouseDown={saveCard} variant="contained">Save</Button>
  </div>
);
  return (
    <Draggable draggableId={String(cardID)} index={index}>
      {provided => (
        <div 
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className="cardContainer">
          <Card>
            <CardContent>
              <Typography gutterBottom className="textFont">
                {text} 
              </Typography>
            </CardContent>
            <Divider variant="middle" />
            <CardActions className="MuiCardActions-root">
           
            <Button size="small" className="btnSize"  color="primary" 
            variant="contained" startIcon={<EditIcon/>}  onMouseDown={() => setEdittingCard(true)}>Edit</Button>
            <Button size="small" className="btnSize" color="secondary"
             variant="contained" startIcon={<DeleteIcon />} onMouseDown={handleDeleteCard}>Delete</Button>
            
             
            </CardActions>
          </Card>
        </div>
      )}
    </Draggable>
  );
});


export default connect()(TrelloCard);
