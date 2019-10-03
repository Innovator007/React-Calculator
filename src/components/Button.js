import React from 'react';

const Button = ({ classname, name, onClick, btnText }) => {
	return (
		<button className={classname ? classname : ""} name={name} onClick={onClick}>{btnText !== undefined ? btnText : name}</button>
	);
}

export default Button;