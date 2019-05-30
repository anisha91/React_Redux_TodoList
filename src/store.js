const initialstate = {
      value: ' ',
      arr: []
}

const reducer = (state=initialstate, action) => {

		let value= state.value,
       		arr= state.arr 
	
	switch(action.type){
		case 'inputval':
			return{
       			...state,
       			value:action.val
       		}
       	case 'additem':
       		return{
       			...state,
       			arr:[...state.arr,state.value],
       			value: ""
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