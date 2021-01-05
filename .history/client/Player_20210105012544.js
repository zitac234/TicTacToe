class Player {
  constructor(name, mark) {
    this.name = name;
    this.mark = mark;
  }
  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
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
