import React from 'react';

const TextInput = React.forwardRef((props, ref) => (
	<input 
	        type='text'
	        placeholder="Item Name" 
	        ref = {ref}
         />

	)
)


export default TextInput;