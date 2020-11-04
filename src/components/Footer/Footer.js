import React from "react";
import "./Footer.scss";
import SocialNetwork from "../SocialNetwork/SocialNetwork";

const Footer = () => {
  return (
    <div className="footer">
      <SocialNetwork />
      <span>Created by Alberto Cruz</span>
    </div>
  );
};

export default Footer;
