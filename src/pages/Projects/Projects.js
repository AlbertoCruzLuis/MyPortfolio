import React, { Fragment } from 'react'
import Footer from '../../components/Footer/Footer'
import ListProject from '../../components/ListProject/ListProject'
import Navbar from '../../components/Navbar/Navbar'

const Projects = () => (
  <Fragment>
    <header>
      <Navbar />
    </header>
    <main>
      <ListProject />
    </main>
    <footer>
      <Footer />
    </footer>
  </Fragment>
)

export default Projects;