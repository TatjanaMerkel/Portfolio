import React from "react";

class Addresses extends React.Component {
  render() {
    return (
      <div class="container">
        <form class="form-horizontal" role="form">
          <fieldset>
            <legend>Billing address</legend>

            <div class="row mt-2">
              <label class="col-sm-2 control-label" for="textinput">
                Address
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  placeholder="Address"
                  class="form-control"
                />
              </div>
            </div>

            <div class="row mt-2">
              <label class="col-sm-2 control-label" for="textinput">
                City
              </label>
              <div class="col-sm-4">
                <input type="text" placeholder="City" class="form-control" />
              </div>

              <label class="col-sm-2 control-label" for="textinput">
                Postcode
              </label>
              <div class="col-sm-4">
                <input
                  type="text"
                  placeholder="Post Code"
                  class="form-control"
                />
              </div>
            </div>

            <div class="row mt-2">
              <label class="col-sm-2 control-label" for="textinput">
                Country
              </label>
              <div class="col-sm-10">
                <input type="text" placeholder="Country" class="form-control" />
              </div>
            </div>
          </fieldset>
        </form>

        <form class="form-horizontal mt-4" role="form">
          <fieldset>
            <legend>Delivery address (if different)</legend>

            <div class="row mt-2">
              <label class="col-sm-2 control-label" for="textinput">
                Address
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  placeholder="Address"
                  class="form-control"
                />
              </div>
            </div>

            <div class="row mt-2">
              <label class="col-sm-2 control-label" for="textinput">
                City
              </label>
              <div class="col-sm-4">
                <input type="text" placeholder="City" class="form-control" />
              </div>

              <label class="col-sm-2 control-label" for="textinput">
                Postcode
              </label>
              <div class="col-sm-4">
                <input
                  type="text"
                  placeholder="Post Code"
                  class="form-control"
                />
              </div>
            </div>

            <div class="row mt-2">
              <label class="col-sm-2 control-label" for="textinput">
                Country
              </label>
              <div class="col-sm-10">
                <input type="text" placeholder="Country" class="form-control" />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Addresses;
