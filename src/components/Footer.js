import React from "react";

const Footer = () => {

  const date = new Date();
  let currentYear = date.getFullYear();

  return <div className="py-4 text-center bg-primary text-white "> &copy; {currentYear}, All Rights Reserved.</div>;
};

export default Footer;