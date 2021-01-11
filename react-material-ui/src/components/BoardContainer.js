import React, { Component, useState } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import {addBoard,setCurrentBoard,deleteBoard} from "../actions/boardActions";
import DeleteIcon from "@material-ui/icons/Delete";
const BoardContainer = ({ boards, dispatch, match }) => {
  const [newBoardTitle, setNewBoardTitle] = useState("");
  dispatch(setCurrentBoard(null));
  const handleChange = (e) => {
    if (e.target.value.length < 15) {
      setNewBoardTitle(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBoard(newBoardTitle));
    setNewBoardTitle("");
  };

  const handleDeleteBoard = (e, boardID) => {
    // console.log("KKBoard: delete board: ", boardID);
    dispatch(deleteBoard(boardID));
  };
  const renderCreateNewBoard = () => {
    return (
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <h3>Create new Board</h3>
        <input
          className="createInput"
          onChange={handleChange}
          value={newBoardTitle}
          placeholder={"Enter title and Hit enter"}
          type="text"
        />
        {"  "}
        <Button className="creatButton" type="submit">
          Create Board
        </Button>
      </form>
    );
  };

  const renderListOfBoards = () => {
    

  

    return Object.entries(boards).map(([boardID, board]) => {
      return (
        <div className="thumbNail">
          <div className="thumbNails">
            <a
            
            href={`#/boards/${boardID}`}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              fontSize:"30px",
              color:"black !important" ,
              textDecoration: "none",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
            
            
            >{board.boardTitle}</a>
          </div>
          {/* maximum update depth incraeses thts why created call back */}
          <DeleteIcon
            size="larger"
            color="secondary"
            onClick={(e) => handleDeleteBoard(e, boardID)}
          />

          {/* <Button size="small" className="btnSize" color="secondary" variant="contained"  color="secondary"
        onClick={(e)=>handleDeleteBoard(e,boardID)} startIcon={<DeleteIcon />}>
        Delete</Button> */}
        </div>
      );
    });
  };

  return (
    <div className="boardContainer">
      {renderCreateNewBoard()}
      <div className="thumbNails">{renderListOfBoards()}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  boards: state.boards,
});

export default connect(mapStateToProps)(BoardContainer);
