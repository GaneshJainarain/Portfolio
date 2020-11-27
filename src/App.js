import React, { Component } from 'react'
import { Layout, Header, Navigation, Drawer, Content} from "react-mdl"
import  Main from './Components/Main';
import { Link } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
          <Layout>
              <Header className='header-color' title={<Link style={{textDecoration: 'underline', color: 'white'}} to="/Home">Ganesh Jainarain</Link>} scroll>
                  <Navigation>
                      <Link to="/"> Enter</Link>
                      <Link to="/Home">Home</Link>
                      <Link to="/AboutMe">AboutMe</Link>
                      <Link to="/ContactMe">ContactMe</Link>
                      <Link to="/Projects">Projects</Link>
                      <Link to="/Resume">Resume</Link>
                  </Navigation>
              </Header >
              <Drawer title="Menu">
                  <Navigation>
                      <Link to="/">EnterPage</Link>
                      <Link to="/Home">Home</Link>
                      <Link to="/AboutMe">AboutMe</Link>
                      <Link to="/ContactMe">ContactMe</Link>
                      <Link to="/Projects">Projects</Link>
                      <Link to="/Resume">Resume</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main/>
              </Content>
          </Layout>
      </div>
    );
  }
}
export default App;