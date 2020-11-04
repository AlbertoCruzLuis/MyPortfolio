import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Projects from '../../pages/Projects/Projects';
import './App.scss'

const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
    </Switch>
  </HashRouter>
);

export default App;
