class Player {
  constructor(name, mark) {
    this.name = name;
    this.mark = mark;
  }

  render() {
    // const myForm = <Form {...this.state} handleChange={this.handleChange} />;
    return (
      <div>
        <Board />
      </div>
    );
  }
}
