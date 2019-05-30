import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {


  render(){
    return(
      <div>
      <header className="App-header">
      <input 
          type='text'
          placeholder="Item Name" 
          value={this.props.value}
          onChange={this.props.onhandlechange} />

      <br />
      <br />
      <button onClick={this.props.onhandleclick}>submit</button>

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

onhandlechange:(e)=> dispatch({type: 'inputval', val: e.target.value}),
onhandleclick:()=> dispatch({type: 'additem'}),
onhandledelete:(idx)=> dispatch({type: 'deleteitem', value: idx})
 }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
