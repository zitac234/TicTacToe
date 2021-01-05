class Player {
  constructor(name, mark) {
    this.name = name;
    this.mark = mark;
    this.score = {
      won: 0,
    };
  }
  get playerName() {
    let actualName =
      this.name[0].toUpperCase() + this.name.slice(1).toLowerCase();
    return actualName;
  }
  get playerMark() {
    return this.mark.toUpperCase();
  }
  set won (win){
    if(win)this.score.won
  }
}
