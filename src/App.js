import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import TextInput from './components/TextInput';
import Btn from './components/Btn';
import List from './components/List';

class App extends Component {
  constructor(){
    super()
    this.inputRef = React.createRef()
  }
    

  render(){
    return(
      <div>
      <header className="App-header">
      <TextInput 
      ref={this.inputRef}
      />

      <br />
      <br />
      <Btn onhandleclick={this.props.onhandleclick.bind(this, this.inputRef)}/>

      <List/>

     
      </header>
      </div>
      )
  }
}
const mapStateToProps = (state)=>{
  return{
    value:state.value,
    arr:state.arr
  }

}
const mapDispatchToProps = (dispatch)=>{
  return{
onhandleclick:(val)=> dispatch({type: 'additem', val:val}),
onhandledelete:(idx)=> dispatch({type: 'deleteitem', value: idx})
 }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);



