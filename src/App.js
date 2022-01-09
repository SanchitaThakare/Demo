import React, { Component } from 'react';

export default class componentName extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: ""
    }
  }

  render() {


    return (
      <div>
        <button title='Submit' onClick={() => alert(this.state.email)}></button>
      </div>
    );
  }
}
