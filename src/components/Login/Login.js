import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: '',
        password: ''
      },
      
      isSubmitting: false,
      isError: false
    };
  }

  submitForm = async (e) => {
    e.preventDefault();
    this.setState({ isSubmitting: true });

    const res = await fetch("http://localhost:3001/login", {
      method: "POST",
      body: JSON.stringify(this.state.credentials),
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

  render() {
    return (
      <div class="container mt-5">
        <div class="card" style={{ margin: 'auto', width: '400px' }}>
          <article class="card-body">
            <h4 class="card-title text-center mb-4 mt-1">Sign in</h4>
            <hr />
            <form onSubmit={this.submitForm}>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      {" "}
                      <i class="fa fa-user"></i>{" "}
                    </span>
                  </div>
                  <input
                    name=""
                    class="form-control"
                    placeholder="Username"
                    type="email"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      {" "}
                      <i class="fa fa-lock"></i>{" "}
                    </span>
                  </div>
                  <input
                    class="form-control"
                    placeholder="******"
                    type="password"
                  />
                </div>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block">
                  {" "}
                  Login{" "}
                </button>
              </div>
            </form>
          </article>
        </div>
      </div>
    );
  }
}

export default Login;
