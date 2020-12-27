import React from "react";

class AddCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
              name: "asdf"
            },
        
            isSubmitting: false,
            isError: false,
          };
      }

  submitForm = async (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ isSubmitting: true });

    const res = await fetch("http://localhost:3001/category", {
      method: "POST",
      body: JSON.stringify(this.state.values),
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.setState({ isSubmitting: false });
    const data = await res.json();

    !data.hasOwnProperty("error")
      ? this.setState({ message: data.success })
      : this.setState({ message: data.error, isError: true });
  };

  handleInputChange = (e) =>
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value },
    });

  render() {
    return (
      <form class="form-horizontal" onSubmit={this.submitForm}>
        <div class="form-group">
          <label class="control-label col-sm-2" for="name">
            Name:
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              placeholder="Enter category name"
              value={this.state.values.name}
              onChange={this.handleInputChange}
            />
          </div>
        </div>

        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddCategory;
