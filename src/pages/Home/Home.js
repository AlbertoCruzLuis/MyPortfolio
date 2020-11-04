import React, { Fragment } from "react";
import "./Home.scss";
import Navbar from "../../components/Navbar/Navbar";
import Resume from "../../components/Resume/Resume";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Buttton";
import HighlightProjects from "../../components/HighlightProjects/HighlightProjects";

const Home = () => (
  <Fragment>
    <header>
      <Navbar />
    </header>
    <main>
      <section className="main-resume">
        <Resume />
        <Button name="Projects" path="/projects" />
      </section>
      <section className="main-projects">
        <HighlightProjects />
      </section>
    </main>
    <footer>
      <Footer />
    </footer>
  </Fragment>
);

export default Home;
