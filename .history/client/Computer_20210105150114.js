import React, { Component } from "react";

export default class Computer extends React.Component {
  constructor(props) {
    super(props);
    this.BoardWin = new Board(props);
  }
}
