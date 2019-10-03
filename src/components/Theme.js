import React from 'react';

const Theme = ({ onClick }) => {
	return (
		<button className="theme-btn" onClick={onClick}><i className="fa fa-paint-brush" aria-hidden="true"></i></button>
	);
}

export default Theme;