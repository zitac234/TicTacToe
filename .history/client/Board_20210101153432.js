import React, { Component } from "react";
const table = document.createElement("table");
table.setAttribute("id", "mytable");
export default class Board extends React.Component {
  myTable() {
    for (let row = 0; row < 3; row++) {
      let tr = document.createElement("tr");
      for (let col = 0; col < 8; col++) {
        let td = document.createElement("td");
        let div = document.createElement("div");
        td.setAttribute("id", `${row}, ${col}`);
        if (row % 2 == col % 2) {
          td.className = "light";
        } else {
          td.className = "dark";
          if (row <= 2) {
            td.appendChild(div);
            div.className = "blue";
          }
          if (row >= 5) {
            td.appendChild(div);
            div.className = "black";
          }
        }
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
