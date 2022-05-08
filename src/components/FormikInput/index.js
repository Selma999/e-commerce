import React from "react";
import { Field } from "formik";

const FormikInput = ({ id, name, placeholder, type }) => {
  return (
    <div className="formik-input">
      <Field
        id={id}
        name={name}
        placeholder={placeholder}
        type={type || "text"}
      />
    </div>
  );
};

export default FormikInput;
