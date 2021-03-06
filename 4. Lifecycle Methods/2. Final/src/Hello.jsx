import React, { Component } from 'react'

class Hello extends Component {
	constructor(props) {
		super(props)

		this.state = {
			age: 30
		}

		this.handleOlder = this.handleOlder.bind(this)
		this.handleYounger = this.handleYounger.bind(this)
	}

	handleOlder() {
		this.setState({age: this.state.age + 1})
	}

	handleYounger() {
		this.setState({age: this.state.age - 1})
	}

	componentDidMount() {
		console.log('Component Hello did mount !')
	}

	componentDidUpdate() {
		console.log('Component Hello did update ! New age is ' + this.state.age)
	}

	componentWillUnmount() {
		console.log('Component Hello will unmount !')
		alert('Hello component will unmount !')
	}

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