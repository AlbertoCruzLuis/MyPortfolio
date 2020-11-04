import React, { useState, useEffect, Fragment } from "react";
//import axios from "axios";
import ResumeData from "../../data/ResumeData";
import "./Resume.scss";
import profile from "../../assets/FotoPerfil.jpg";
import js from "../../assets/Skills/javascript.png";
import sass from "../../assets/Skills/sass.png";
import react from "../../assets/Skills/react.png";
import python from "../../assets/Skills/python.png";
import flask from "../../assets/Skills/flask.png";
import SocialNetwork from "../SocialNetwork/SocialNetwork";

const Resume = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    /*axios.get("https://api.github.com/users/albertocruzluis").then((res) => {
      setName(res.data.name);
      setDescription(res.data.bio);
    });*/
    setName(ResumeData.name);
    setDescription(ResumeData.description);
  }, []);

  return (
    <Fragment>
      <div className="resume">
      <SocialNetwork />
        <div className="resume-image">
          <svg height="120" width="120">
            <defs>
              <pattern
                id="image"
                patternUnits="userSpaceOnUse"
                width="100%"
                height="100%"
              >
                <image
                  href={profile}
                  x="-5"
                  y="0"
                  width="120"
                  height="120"
                />
              </pattern>
            </defs>
            <circle
              cx="60"
              cy="60"
              r="50"
              stroke="black"
              stroke-width="2"
              fill="url(#image)"
            />
          </svg>
        </div>
        <div className="resume-name">
          <h1>
            <strong>{name}</strong>
          </h1>
        </div>
        <div className="resume-description">
          <p>{description}</p>
        </div>
        <div className="resume-skills">
          <div className="resume-skills-item">
            <img src={js} alt="JS" />
          </div>
          <div className="resume-skills-item">
            <img src={sass} alt="Sass" />
          </div>
          <div className="resume-skills-item">
            <img src={react} alt="React" />
          </div>
          <div className="resume-skills-item">
            <img src={python} alt="Python" />
          </div>
          <div className="resume-skills-item">
            <img src={flask} alt="Flask" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Resume;
