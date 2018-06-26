import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './Hello'

ReactDOM.render(
	<Hello firstname="John" lastname="Doe" />,				// What
	document.getElementById('root')		// Where
);