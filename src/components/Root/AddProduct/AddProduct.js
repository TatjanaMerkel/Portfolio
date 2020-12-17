import React from "react";

class AddProduct extends React.Component {
  render() {
    return (
      <form class="form-horizontal" action="/action_page.php">
        <div class="form-group">
          <label class="control-label col-sm-2" for="name">
            Name:
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Enter product name"
            />
          </div>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-2" for="category">
            Category:
          </label>
          <div class="col-sm-10">
            <select id="category" class="form-control">
              <option value="fruits">Fruits</option>
              <option value="vegetables">Vegetables</option>
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
              placeholder="Enter product description"
            />
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
              placeholder="Enter product image"
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

export default AddProduct;
