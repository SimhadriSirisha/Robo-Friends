import React from 'react';

//using props.children we can create component which wrap other component.
const Scroll = (props) => {
	return (
		<div style={{ overflowY: 'scroll', border: '1px dotted linear-gradient(to left, #00bf8f, #001510)', height: '400px'}}>
			{props.children};
		</div>
	)
}

export default Scroll;