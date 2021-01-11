import Addresses from "../Addresses";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import PaymentOptions from "../PaymentOptions";
import React from "react";
import ShoppingCart from "../ShoppingCart";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Check shopping cart", "Select payment option", "Enter address"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <ShoppingCart />;
    case 1:
      return <PaymentOptions />;
    case 2:
      return <Addresses />;
    default:
      return "Unknown stepIndex";
  }
}

export default function CheckoutStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div>
        {activeStep === steps.length ? (
          <div class="w-100">
            <Typography className={classes.instructions}>
              <div class='mt-4 mb-4'>
                <Link to='/thanks'>
                <button
                  style={{ display: "block", margin: "auto" }}
                  type="button"
                  class="btn btn-primary"
                >
                  Confirm Purchase
                </button>
                </Link>
              </div>
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>

            <div class="d-flex justify-content-between mt-4 ml-5 mr-5">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
