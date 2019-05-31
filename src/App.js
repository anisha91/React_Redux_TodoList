import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
     constructor(){
        super();
        this.textinput = React.createRef();
      }

  render(){
    return(
      <div>
      <header className="App-header">
      <input 
          type='text'
          placeholder="Item Name" 
          ref={this.textinput}
         />

      <br />
      <br />
      <button onClick={this.props.onhandleclick.bind(this,this.textinput)}>submit</button>

      <ol>
      {this.props.arr.map((itm,index)=>{
        return(<div><li>{itm}<button onClick={this.props.onhandledelete.bind(this,index)}>Delete</button></li></div>)
      })}
      </ol>
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



