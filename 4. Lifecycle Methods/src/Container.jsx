import React, { Component } from 'react'
import Hello from './Hello'

class Container extends Component {
	constructor(props) {
		super(props)

		this.state = {
			mountHello: false
		}

		this.handleMountHello = this.handleMountHello.bind(this)
		this.handleUnmountHello = this.handleUnmountHello.bind(this)
	}

	handleMountHello() {
		this.setState({mountHello: true})
	}

	handleUnmountHello() {
		this.setState({mountHello: false})
	}

	render() {
		return (
			<div>
				{ this.state.mountHello ? <Hello firstname="John" lastname="Doe" /> : null }				
				<button onClick={this.handleMountHello}>Mount Hello Component</button>
				<button onClick={this.handleUnmountHello}>Unmount Hello Component</button>
			</div>
		)
	}
}

export default Container