class Player {
  constructor(name, mark) {
      this.name = 
      mark: "",
      errorMessage: "",
      showGame: false,

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
