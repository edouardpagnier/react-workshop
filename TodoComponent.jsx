import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef()
    this.state = {
      items: [],
      current: ''
    };
  }

  /* Update the state current to the input value */
  onChange = (event) => {
    this.setState({ current: event.target.value });
  }

  /* Update the state items */
  onSubmit = (event) => {
    // Prevent default behaviour
    event.preventDefault();

    // Check if the current value is not an empty string
    if (this.state.current === '') {
      return
    }

    // Push a new item & reset the current todo state
    this.setState({
      items: [...this.state.items, this.state.current],
      current: ''
    });

    // Reset the input value
    this.input.current.value = ''

  }

  /* Update a item to be done */
  onClick(event) {
    // Change text decoration style to line through
    event.target.style.textDecoration = 'line-through'
  }

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.current} onChange={this.onChange} ref={this.input} />
          <button>Submit</button>
        </form>
        <ul>
          {
            this.state.items.map((item, index) => <li key={index} onClick={this.onClick}>{item}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default Todo