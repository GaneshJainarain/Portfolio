import React from 'react'
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import ContactMe from './Components/ContactMe';
import Projects from './Components/Projects';
import ProjectSubpage from './Components/ProjectSubpage';
import { BrowserRouter as Router, Switch, Routes, Route, Link} from "react-router-dom"



  function App() {
    return (
      
      <Router>
      <span>

          <nav> 
            <ul>
              <li class="nav-item">
              <Link to="/">Directory</Link>
              </li>
              <li class="nav-item">
              <Link to="/Home">Home</Link>
              </li>
              <li class="nav-item">
              <Link to="/AboutMe">AboutMe</Link>
              </li>
              <li class="nav-item">
              <Link to="/ContactMe">Contact Me</Link>
              </li>
              <li class="nav-item">
              <Link to="/Projects">Projects</Link>
              </li>
              <li class="nav-item">
              <Link to="/ProjectSubpage">ProjectSubpage</Link>
              </li>
            </ul>
          </nav>
      </span>
          <Switch>
            
            <Route path="/Home">
                <Home />
            </Route>
            <Route path="/Projects">
                <Projects />
            </Route>
            <Route path="/ProjectSubpage">
                <ProjectSubpage />
            </Route>
            <Route path="/AboutMe">
              <AboutMe />
            </Route>
            <Route path="/ContactMe">
              <ContactMe />
            </Route>
          </Switch>

      </Router>
      

    );
  }

export default App;