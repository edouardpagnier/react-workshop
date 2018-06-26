import React, { Component } from 'react'

class Hello extends Component {
	constructor(props) {
		super(props)

		this.state = {
			age: 30
		}
	}

	// Write two methods to handle buttons click events

	render() {
		return (
			<div>
				<h1>Hello {this.props.firstname} {this.props.lastname} your age is {this.state.age} !</h1>
				// Write two JSX element to display buttons
			</div>
		)
	}
}

export default Hello