import React from "react";
import classNames from "classnames";

function Button({ buttonTitle, className, icon, loginIcon, ...rest }) {
  return (
    <div className={classNames("button-wrapper", className)}>
      {loginIcon ? (
        <button
          className={classNames("button-login", className || "")}
          type="button"
          {...rest}
        >
          <img src={icon} alt="" />
        </button>
      ) : (
        <>
          <button
            className={classNames("button", className || "")}
            type="button"
            {...rest}
          >
            {buttonTitle}
          </button>
        </>
      )}
    </div>
  );
}

export default Button;
