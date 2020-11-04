import React from "react";
import "./SocialNetwork.scss";

import github from "../../assets/SocialNetwork/Github.svg";
import linkedin from "../../assets/SocialNetwork/Linkedin.svg";

const SocialNetwork = () => {
  return (
    <div className="social-network">
      <div className="social-network-item">
        <a href="https://github.com/AlbertoCruzLuis">
          <img src={github} alt="" />
        </a>
      </div>
      <div className="social-network-item">
        <a href="https://www.linkedin.com/in/alberto-cruz-luis-53abb7194/">
          <img src={linkedin} alt="" />
        </a>
      </div>
    </div>
  );
};

export default SocialNetwork;
