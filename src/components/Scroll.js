import React from 'react';

const Scroll = (props)=>{
	return (
		<div style={{overflow:'scroll', height:"380px", border:"1px solid black"}}>
			{props.children}
		</div>
		);
};
export default Scroll;