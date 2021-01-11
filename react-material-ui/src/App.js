import React, { Component } from 'react';

import { Switch, Route,Redirect } from "react-router-dom";
import "./styles.css";
import _ from "lodash";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import NavBar from "./components/NavBar";
import TrelloBoard from "./components/TrelloBoard";
import Home from './components/Home';


function App() {
  
  return (
  
      <div>
        <NavBar/>
        <Switch>
            <Route path="/boards/:boardID" component={TrelloBoard} />
        
            <Route path="/home" component={Home} />
            <Redirect from="/" to="/home" />
          </Switch>
       
      </div>
  
  

    );
}

export default App;
