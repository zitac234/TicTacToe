import React, { Component } from "react";
const table = document.createElement("table");
export default class Board extends React.Component {
    constructor(props){
        super(prop)
    }
  myTable() {
    for (let row = 0; row < 3; row++) {
      let tr = document.createElement("tr");
      for (let col = 0; col < 3; col++) {
        let td = document.createElement("td");
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    document.body.appendChild(table);
  }
  render() {
    return <div>{this.myTable()}</div>;
  }
}
