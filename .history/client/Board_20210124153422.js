import React from "react";

export default class Board extends React.Component {

  // create table, triggered everytime the page renders
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
    return (
      <div>
        {/* {this.myTable()} */}
        {this.state.mounted && (
          <Computer
            win={this.win}
            diagWin={this.diagWin}
            colWin={this.colWin}
            rowWin={this.rowWin}
            grid={this.state.grid}
            emptyCell={this.emptyCell}
            PlayerMark={this.state.PlayerMark}
            ComputerMark={this.state.ComputerMark}
          />
        )}
      </div>
    );
  }
}
