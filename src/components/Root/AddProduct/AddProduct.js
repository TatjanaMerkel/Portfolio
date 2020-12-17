import React from "react";

class AddProduct extends React.Component {
  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />

        <label>
            Description:
            <input type="text" name="description" />
        </label>
        <br />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddProduct;
