	import React from 'react';
	import {connect} from 'react-redux';

	const List = (props) => {
 
		return (
		  <div>

			<ol>
		      {props.arr.map((itm,index)=>{
		        return(<div><li>{itm}<button onClick={props.onhandledelete.bind(this,index)}>Delete</button></li></div>)
		      })}
		    </ol>

		  </div>
		)
}

const mapStateToProps = (state)=>{
  return{
    value:state.value,
    arr:state.arr
  }

}
const mapDispatchToProps = (dispatch)=>{
  return{
       onhandledelete:(idx)=> dispatch({type: 'deleteitem', value: idx})
 }
}

export default connect(mapStateToProps,mapDispatchToProps)(List)