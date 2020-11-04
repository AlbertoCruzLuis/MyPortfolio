import React from "react";
import Project from "../Project/Project";
import ProjectData from "../../data/ProjectData";
import "./HighlightProjects.scss";

const HighlightProjects = () => {
  return (
    <div className="highlight-projects">
      <div className="highlight-projects-title">
        <h1>Projects</h1>
      </div>
      <Project
        name={ProjectData.projects[0].name}
        description={ProjectData.projects[0].description}
        image={ProjectData.projects[0].image}
        url_repo={ProjectData.projects[0].urlRepo}
        url_demo={ProjectData.projects[0].urlDemo}
      />
    </div>
  );
};

export default HighlightProjects;
