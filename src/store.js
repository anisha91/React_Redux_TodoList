const initialstate = {
      arr: []
  
}

const reducer = (state=initialstate, action) => {
	
	switch(action.type){
       	case 'additem':
       	console.log("inside addItem", action.val.current)
       		return{
       			...state,
       			arr: [...state.arr, action.val.current.value]
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