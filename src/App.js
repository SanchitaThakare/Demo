import React, { Component } from 'react';

export default class componentName extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email:""
    }
  }
  
  render() {
    return (
      <div> 
        <input type={'email'} onChange={(event)=>{this.setState({email:event.target.value})}}></input>
        <button title='Submit' onClick={()=>alert(this.state.email)}></button>
         </div>
    );
  }
}
