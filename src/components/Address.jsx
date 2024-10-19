import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Address Point</span>1226 Tamani Arts Building PO Box: 416343, Business Bay, Dubai - UAE
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mail us</span>{" "}
        <a href="mailto:admin@simsign.org">admin@simsign.org</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">call us</span>{" "}
        <a href="Tel: +216 21 184 010">+351914285034</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
