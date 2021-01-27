import React, { useEffect } from "react";
import "./ListProject.scss";
//import axios from "axios";
import Project from "../Project/Project";
import ProjectData from "../../data/ProjectData";

const ListProject = () => {
  useEffect(() => {
    /*axios.get("https://api.github.com/users/albertocruzluis/repos").then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        axios.get(res.data[i].url).then((res) => {
          console.log(res.data);
        });
      }
    });*/
  }, []);

  return (
    <div className="list-project">
      <div className="list-project-title">
        <span>Projects</span>
      </div>
      <div className="project-grid">
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
    </div>
  );
};

export default ListProject;
