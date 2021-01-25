import React from "react";
import Form from "./Form";
const table = document.createElement("table");
table.setAttribute("id", "mytable");
export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBoard: false,
    };
  }
  myTable() {
    for (let row = 0; row < 3; row++) {
      let tr = document.createElement("tr");
      tr.setAttribute("id", row);
      for (let col = 0; col < 3; col++) {
        let td = document.createElement("td");
        td.setAttribute("id", `[${row}, ${col}]`);
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    document.body.appendChild(table);
  }
  render() {
    return ({this}
    <div>{this.myTable()}</div>);
  }
}
