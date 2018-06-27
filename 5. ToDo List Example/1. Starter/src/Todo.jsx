import React, { Component } from 'react';

class Todo extends Component {
  /* 1. Create the initiale state & main input reference */
  // constructor(props) {}

  /* 2. Update the state current to the input value */
  // onChange = (event) => {}

  /* 3. Update the state items */
  // onSubmit = (event) => {}

  /* 4. Update a item to be done */
  // onClick(event) {}

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <form>
          <input />
          <button>Submit</button>
        </form>
        <ul>
          {/* Make an map iteration through the state items to render a list */}
        </ul>
      </div>
    );
  }
}

export default Todo