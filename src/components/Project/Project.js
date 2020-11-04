import React, { useState } from "react";
import Button from "../Button/Buttton";
import InfoIcon from "../../assets/info.svg";
import "./Project.scss";

const Project = ({ name, description, image, url_repo, url_demo }) => {
  const [btnActive, setBtnActive] = useState(false);
  const handleProjectInfo = () => {
    setBtnActive(!btnActive);
  };
  return (
    <div className="project">
      <div className="project-flip">
        {!btnActive && (
          <div className="project-front">
            <div className="project-image">
              <img src={image} alt="" />
              <div className="project-name">
                <span>{name}</span>
              </div>
              <button onClick={handleProjectInfo}>
                <div className="info-container">
                  <img src={InfoIcon} alt="" />
                </div>
              </button>
            </div>
          </div>
        )}
        {btnActive && (
          <div className="project-back">
            <div className="project-image">
              <img src={image} alt="" />
              <div className="project-description">
                <p>{description}</p>
              </div>
              <button onClick={handleProjectInfo}>
                <div className="info-container">
                  <img src={InfoIcon} alt="" />
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="project-buttons">
        <div className="project-button">
          <Button name="Code" extern={true} path={url_repo} />
        </div>
        <div className="project-button">
          <Button name="Demo" extern={true} path={url_demo} />
        </div>
      </div>
    </div>
  );
};

export default Project;
