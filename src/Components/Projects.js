import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={25} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://bioblog3d.files.wordpress.com/2013/12/seleniumpy.jpg) center / cover'}} >Python and Selenium</CardTitle>
            <CardText >
                      I created this project in order for the retrival of data to be more efficent and organzied. 
                      This project acts as a autommated platform for investors to pull EPS data on companies based on specific date inputs.
            </CardText>
            <CardActions border>
              <Button href= "https://github.com/RicheyJay23/EPS" rel="noreferrer" target="_blank" colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>

  

        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={25} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Favorite Link Storer</CardTitle>
            <CardText>
                      A simple React app that will list your favorite links on the Web.
            </CardText>
            <CardActions border>
              <Button href= "https://github.com/RicheyJay23/Fave-Links-storer" rel="noreferrer" target="_blank" colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={25} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Design Pad</CardTitle>
            <CardText>
                       A simple React app that will be a design pad. Users will be able to drag-and-drop inputs to change the design pads when it is in EDIT mode. 
            </CardText>
            <CardActions border>
              <Button href= "https://github.com/RicheyJay23/design-pad" rel="noreferrer" target="_blank" colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
        
        
        
        
        </div>
      )
    } 

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Python</Tab>
          <Tab>React</Tab>
          
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;