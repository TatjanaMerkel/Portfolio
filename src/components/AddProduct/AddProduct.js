import React from "react";
class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        category: 1,
        price_type: 1,
        name: "",
        description: "",
        price: 0,
        image: "",
      },

      isSubmitting: false,
      isError: false,
    };
  }

  submitForm = async (e) => {
    e.preventDefault();
    this.setState({ isSubmitting: true });

    const token = localStorage.getItem('token');

    const res = await fetch("http://localhost:3001/product", {
      method: "POST",
      body: JSON.stringify({ ...this.state.values, token: token }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.setState({ isSubmitting: false });
    const data = await res.json();

    !data.hasOwnProperty("error")
      ? this.setState({ message: data.success })
      : this.setState({ message: data.error, isError: true });
    
      this.props.history.push("/admin/list-products");
  };

  handleInputChange = (e) =>
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value },
    });

  render() {
    return (
      <form
        style={{ margin: " 25px auto", width: "50%" }}
        class="form-horizontal"
        onSubmit={this.submitForm}
      >
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
              placeholder="Enter product name"
              value={this.state.values.name}
              onChange={this.handleInputChange}
            />
          </div>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-2" for="category">
            Category:
          </label>
          <div class="col-sm-10">
            <select
              id="category"
              name="category"
              class="form-control"
              value={this.state.values.category}
              onChange={this.handleInputChange}
            >
              <option value="1">Fruits</option>
              <option value="2">Vegetables</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-2" for="description">
            Description:
          </label>
          <div class="col-sm-10">
            <textarea
              class="form-control"
              id="description"
              name="description"
              placeholder="Enter product description"
              value={this.state.values.description}
              onChange={this.handleInputChange}
            />
          </div>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-2" for="price">
            Price in cents:
          </label>
          <div class="col-sm-10">
            <input
              id="price"
              class="form-control"
              type="number"
              name="price"
              placeholder="Enter product price"
              value={this.state.values.price}
              onChange={this.handleInputChange}
            />
          </div>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-2" for="price-type">
            Price Type:
          </label>
          <div class="col-sm-10">
            <select
              id="price-type"
              name="price-type"
              class="form-control"
              value={this.state.values.price_type}
              onChange={this.handleInputChange}
            >
              <option value="1">Per piece</option>
              <option value="2">Per kilo</option>
              <option value="3">Per 100g</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-2" for="image">
            Image:
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="image"
              name="image"
              placeholder="Enter product image"
              value={this.state.values.image}
              onChange={this.handleInputChange}
            />
          </div>
        </div>

        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default btn-primary">
              Bestätigen
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddProduct;
