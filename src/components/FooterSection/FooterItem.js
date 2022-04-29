import classNames from "classnames";
import React from "react";
import { useLinkClickHandler } from "react-router-dom";

const FooterItem = ({ item, className }) => {
  return (
    <div
      className={classNames("footer__section__item", { className })}
      onClick={useLinkClickHandler}
    >
      <span>{item}</span>
    </div>
  );
};

export default FooterItem;
