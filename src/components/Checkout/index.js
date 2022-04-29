import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ErrorMessage, Form, Formik } from "formik";
import FormikInput from "../FormikInput";
import * as Yup from "yup";

import {
  isValid,
  isExpirationDateValid,
  isSecurityCodeValid,
} from "creditcard.js";

import { submitCheckoutForm } from "../../Redux/Actions/Payment";

function Checkout(props) {
  const error = "This field is required.";

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email().required(error),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 characters minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    firstName: Yup.string().required(error),
    lastName: Yup.string().required(error),
    creditCard: Yup.string().test(
      "test-credit-card",
      "Credit Card number is invalid",
      (value) => {
        if (value) {
          return isValid(value);
        }

        return false;
      }
    ),
    date: Yup.string()
      .test(
        "test-expiration date",
        "Credit card is not valid anymore",

        (value) => {
          if (value) {
            const splitedArray = value.toString().split("/");
            return isExpirationDateValid(splitedArray[0], splitedArray[1]);
          }

          return false;
        }
      )
      .required(error),
    cvv: Yup.string()
      .test("test-cvv", "Security code is not validd", (value) =>
        isSecurityCodeValid("4556603578296676", "250")
      )
      .required(error),
    address: Yup.string().required(error),
    city: Yup.string().required(error),
    zip: Yup.number().required(error),
    state: Yup.string(),
    country: Yup.string().required(error),
  });

  const initialValues = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    placeholder: "",
    creditCard: "",
    date: "",
    year: "",
    cvv: "",
    address: "",
    city: "",
    zip: "",
    state: "",
    country: "",
  };

  console.log(props.form);

  return (
    <div className="cart">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          props.submitCheckoutForm(values);
          navigate("/cart/purchased");
        }}
      >
        {({ errors }) => {
          // console.log(errors);
          return (
            <Form>
              <div className="form-wrapper">
                <div className="formik__section-wrapper">
                  <p className="formik__section__title">Customer Info</p>
                  <div>
                    <div>
                      <FormikInput
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                      />
                      <ErrorMessage
                        name="firstName"
                        className="error-msg"
                        component="div"
                      />
                    </div>
                    <div>
                      <FormikInput
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                      />
                      <ErrorMessage
                        name="lastName"
                        className="error-msg"
                        component="div"
                      />
                    </div>
                    <div>
                      <FormikInput
                        id="email"
                        name="email"
                        placeholder="Email"
                      />
                      <ErrorMessage
                        name="email"
                        className="error-msg"
                        component="div"
                      />
                    </div>
                    <div>
                      <FormikInput
                        id="password"
                        name="password"
                        placeholder="Enter password"
                      />
                      <ErrorMessage
                        name="password"
                        className="error-msg"
                        component="div"
                      />
                    </div>
                  </div>
                </div>

                <div className="formik__section-wrapper">
                  <p className="formik__section__title">Payment Info</p>
                  <div>
                    <div>
                      <FormikInput
                        id="creditCard"
                        name="creditCard"
                        placeholder="Credit Card Number"
                      />
                      <ErrorMessage
                        name="creditCard"
                        className="error-msg"
                        component="div"
                      />
                    </div>
                    <div>
                      <FormikInput
                        id="date"
                        name="date"
                        placeholder="Expiration date"
                      />
                      <ErrorMessage
                        name="month"
                        className="error-msg"
                        component="div"
                      />
                    </div>
                    <div>
                      <FormikInput id="cvv" name="cvv" placeholder="CVV" />
                      <ErrorMessage
                        name="cvv"
                        className="error-msg"
                        component="div"
                      />
                    </div>
                  </div>
                </div>

                <div className="formik__section-wrapper">
                  <p className="formik__section__title">Shipping Info</p>
                  <div>
                    <div>
                      <FormikInput
                        id="address"
                        name="address"
                        placeholder="Address"
                      />
                      <ErrorMessage
                        name="address"
                        className="error-msg"
                        component="div"
                      />
                    </div>
                    <div>
                      <FormikInput id="city" name="city" placeholder="City" />
                      <ErrorMessage
                        name="city"
                        className="error-msg"
                        component="div"
                      />
                    </div>
                    <div>
                      <FormikInput id="zip" name="zip" placeholder="Zip Code" />
                      <ErrorMessage
                        name="zip"
                        className="error-msg"
                        component="div"
                      />
                    </div>
                    <div>
                      <FormikInput
                        id="state"
                        name="state"
                        placeholder="State"
                      />
                      <ErrorMessage
                        name="state"
                        className="error-msg"
                        component="div"
                      />
                    </div>
                    <div>
                      <FormikInput
                        id="country"
                        name="country"
                        placeholder="Country"
                      />
                      <ErrorMessage
                        name="country"
                        className="error-msg"
                        component="div"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="formik__button-wrapper">
                <button className="formik__button" type="submit">
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    form: store.payment.form,
  };
};

export default connect(mapStateToProps, {
  submitCheckoutForm,
})(Checkout);
