import React, { Component } from 'react'

class Hello extends Component {
	constructor(props) {
		super(props)

		this.state = {
			age: 30
		}
	}

	handleOlder() {
		this.setState({age: this.state.age + 1})
	}

	handleYounger() {
		this.setState({age: this.state.age - 1})
	}

	// You can play with the lifecycle method here
	// componentDidMount()
	// componentDidUpdate()
	// componentWillUnmount()

	render() {
		return (
			<div>
				<h1>Hello {this.props.firstname} {this.props.lastname} your age is {this.state.age} !</h1>
				<button onClick={() => {this.handleOlder()}}>Older</button>
				<button onClick={() => {this.handleYounger()}}>Younger</button>
			</div>
		)
	}
}

export default Hello