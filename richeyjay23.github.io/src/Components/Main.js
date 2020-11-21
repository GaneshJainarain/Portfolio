import React from 'react';
import { Switch, Route} from 'react-router-dom'

import Home from './Home';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Projects from './Projects';
import ProjectSubpage from './ProjectSubpage';




const Main = () => (
    
        <Switch>

            <Route eaxct path="/Home" component={Home}/>
            <Route path="/AboutMe" component={AboutMe}/>
            <Route path="/ContactMe" component={ContactMe}/>
            <Route path="/Projects" component={Projects}/>
            <Route path="/ProjectSubpage" component={ProjectSubpage}/> 

        </Switch>
    
)


export default Main;