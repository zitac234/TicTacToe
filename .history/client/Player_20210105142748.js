import React, { Component } from "react";
export default class Player extends Reac {
  constructor(name, mark) {
    this.name = name;
    this.mark = mark;
  }
  get playerName() {
    let actualName =
      this.name[0].toUpperCase() + this.name.slice(1).toLowerCase();
    return actualName;
  }
  get playerMark() {
    return this.mark.toUpperCase();
  }
}
