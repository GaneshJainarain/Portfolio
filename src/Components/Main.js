import React from 'react';
import { Switch, Route} from 'react-router-dom'
import Home from './Home';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Projects from './Projects';
import Resume from './Resume';
import EnterPage from './EnterPage';





const Main = () => (
    
        <Switch>

            <Route exact path="/" component={EnterPage}/>
            <Route path="/Home" component={Home}/>
            <Route path="/AboutMe" component={AboutMe}/>
            <Route path="/ContactMe" component={ContactMe}/>
            <Route path="/Projects" component={Projects}/>
            <Route path="/Resume" component={Resume}/>

        </Switch>
    
)


export default Main;