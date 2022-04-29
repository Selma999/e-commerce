import React from "react";
import { Field } from "formik";

const FormikInput = ({ id, name, placeholder }) => {
  return (
    <div className="formik-input">
      <Field id={id} name={name} placeholder={placeholder} />
    </div>
  );
};

export default FormikInput;
