import React from "react";

class ShoppingCart extends React.Component {
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

  render() {
    return (
      <div>Hello Kitty</div>
    );
  }
}

export default ShoppingCart;
