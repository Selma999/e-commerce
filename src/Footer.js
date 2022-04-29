import React from "react";
import FooterSection from "./components/FooterSection";

function Footer() {
  const footerSectionListFirst = [
    {
      id: 1,
      item: "About us",
    },
    {
      id: 2,
      item: "Careers",
    },
  ];

  const footerSectionListSecond = [
    {
      id: 3,
      item: "Shipping",
    },
    {
      id: 4,
      item: "Billing",
    },
  ];

  const footerSectionListThird = [
    {
      id: 5,
      item: "On-site shop",
    },
    {
      id: 6,
      item: "Our customers",
    },
  ];

  const footerSectionListFourth = [
    {
      id: 7,
      item: "(+387)8594503495",
    },
    {
      id: 8,
      item: "e-commerce@emc.com",
    },
  ];
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <FooterSection
          footerSectionTitle="About"
          footerSectionList={footerSectionListFirst}
        />
        <FooterSection
          footerSectionTitle="FAQ"
          footerSectionList={footerSectionListSecond}
        />
        <FooterSection
          footerSectionTitle="More"
          footerSectionList={footerSectionListThird}
        />
        <FooterSection
          footerSectionTitle="Contact"
          footerSectionList={footerSectionListFourth}
        />
      </div>
    </div>
  );
}

export default Footer;
