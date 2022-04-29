import classNames from "classnames";
import React from "react";

const Container = ({ className, children }) => {
  return (
    <div className={classNames("container", { className })}>{children}</div>
  );
};

export default Container;
