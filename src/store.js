const initialstate = {
      arr: []
  
}

const reducer = (state=initialstate, action) => {

		let value= state.value,
       		arr= state.arr 
	
	switch(action.type){
       	case 'additem':
       		return{
       			...state,
       			arr:[...state.arr,action.val.current.value]
       		}

       	case 'deleteitem':
       		return{
       			...state,
       			arr:state.arr.filter((itm,idx)=>idx!==action.value)
       		}

       		default:
       		return state

	}
}

export default reducer;