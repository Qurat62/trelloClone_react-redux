//import logo from './logo.svg';
//import './App.css';
import "../styles.css";
import React,{Component} from 'react';
//import {connect} from 'react-redux';
import store from '../store';
import { Provider } from 'react-redux';
import BoardContainer from './BoardContainer';

export class Home extends Component {
	render() {
	  
	  return (
		<Provider store={store}> 
		<div className="">
		            
            <BoardContainer/>
		
		</div>
		</Provider>
	  );
	}
  }
// const mapStateToProps = state => ({
// 	loading: state.books.loading
//   });
  
  //export default connect()(Home);
  export default Home;
