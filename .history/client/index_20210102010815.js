import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import Player from "./Player";
import Form from

ReactDOM.render(
  <div>
    <Player />
    {/* <Board /> */}
  </div>,
  document.getElementById("app") // make sure this is the same as the id of the div in your index.html
);
