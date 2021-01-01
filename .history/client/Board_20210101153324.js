import React, { Component } from "react";
let table = document.createElement("table");
table.setAttribute("id", "mytable");
export default class Board extends React.Component {
  myTable() {}
  render() {
    return <div>{this.myTable()}</div>;
  }
}
