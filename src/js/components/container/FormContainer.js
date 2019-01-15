import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from "../presentational/Input";

class FormContainer extends Component {
  constructor() {
    super();

    this.state = {
      user_name: ""
    };

    this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value });
  }



  render() {
    const { user_name } = this.state;

    return (
      <form id="article-form">
        <Input 
          text="User name"
          label="user_name"
          type="text"
          id="user_name"
          value={user_name}
          handleChange={this.handleChange}
        />
        
      </form>
    )
  }
}


export default FormContainer;


const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
