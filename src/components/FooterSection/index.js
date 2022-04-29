import React from "react";
import classNames from "classnames";

import FooterItem from "./FooterItem";

function FooterSection({ className, footerSectionTitle, footerSectionList }) {
  return (
    <div className={classNames("footer__section", { className })}>
      <span className="footer__section__title">{footerSectionTitle}</span>
      <div className="footer__section__items">
        {footerSectionList.map(({ id, item }) => {
          return <FooterItem key={id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default FooterSection;
