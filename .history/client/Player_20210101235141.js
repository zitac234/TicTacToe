import React, { Component } from "react";
export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mark: "",
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event){
      event.preventDefault()
      this.setState
  }
  componentDidMount() {}
   myForm(){
    <form onSubmit
   }
}
