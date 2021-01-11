import React, { Component } from "react";
import { Icon, Card, Button } from "@material-ui/core";
import Textarea from "react-textarea-autosize";
import { connect } from "react-redux";
import { addList } from "../actions/listsActions";
import { addCard } from "../actions/cardActions";

class TrelloButton extends Component {
  
  state = {
    formOpen: false,
    text: "",
  };

  openForm = () => {
    this.setState({ formOpen: true });
  };

  closeForm = (e) => {
    this.setState({ formOpen: false, text: "" });
  };

  handleInputChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state; //set state
    if (text) {
      this.setState({ text: "" });
      dispatch(addList(text));
    }
  };
 
   
  handleAddCard = () => {
    debugger;
    const { dispatch, listID,boardID } = this.props;
console.log("show board id",boardID);
    const { text } = this.state;
    if (text) {
      this.setState({ text: "" });
      dispatch(addCard(listID, text,boardID));
    }
  };

  renderAddButton = () => {
    const { list } = this.props;

    const buttonText = list ? "Add another list" : "Add another card";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

    return (
      <div
        className="buttonGroup"
        onClick={this.openForm}
        style={{
          Opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground,
        }}
      >
        <Icon style={{ marginTop: 6 }}>add</Icon>
        <p>{buttonText}</p>
      </div>
    );
  };

  renderForm = () => {
    const { list } = this.props;

    const placeholder = list
      ? "Enter list title..."
      : "Enter a title for this card...";
    const buttonTitle = list ? "Add List" : "Add Card";

    return (
      <div className="">
        <Card className="cardTextArea">
          <Textarea
            className="textBox"
            placeholder={placeholder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleInputChange}
          ></Textarea>
        </Card>

        <Button
          variant="contained"
          onMouseDown={list ? this.handleAddList : this.handleAddCard}
        >
          {buttonTitle}{" "}
        </Button>
        <Icon style={{ marginLeft: 100, marginTop: 10, cursor: "pointer" }}>
          close
        </Icon>
      </div>
    );
  };

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

export default connect()(TrelloButton);
