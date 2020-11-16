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
      {ProjectData.projects.map((project) => (
        <Project
          name={project.name}
          description={project.description}
          image={project.image}
          url_repo={project.urlRepo}
          url_demo={project.urlDemo}
        />
      ))}
    </div>
  );
};

export default HighlightProjects;
