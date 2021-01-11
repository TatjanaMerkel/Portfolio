import { Link } from "react-router-dom";
import React from "react";

class Thanks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        name: "asdf",
      },

      isSubmitting: false,
      isError: false,
    };
  }

  render() {
    return (
      <div class="mt-5 mb-4">
        <div class="d-flex justify-content-center mb-4">
        <div>
        Thank you for your purchase!
        </div>
        </div>
        
        <Link to="/">
          <button
            style={{ display: "block", margin: "auto" }}
            type="button"
            class="btn btn-primary"
          >
            Back to main page
          </button>
        </Link>
      </div>
    );
  }
}

export default Thanks;
