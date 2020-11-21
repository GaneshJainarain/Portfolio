import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'

class AboutMe extends Component {
  render() {
    return (

      <div style={{width: '100%', margin: 'auto'}}>
          <Grid className='home-grid'>
            <Cell col={12}>
                <img 
                src='https://typingagent.com/assets/home/type-code-lessons.png'
                alt="Avatar icon"
                className="avatar-img"
                />
                <div className="banner-text">
                  <h1>Hey! My name's Ganesh! Come get to know me!</h1>

                  <hr/>


                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                   and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                </p>
              <div className="social-links">

      

                {/* Resume */}
                <a href= "=/Desktop/Resume/Resume.pdf" download> 
                  <i class=" fa fa-file" aria-hidden="true"/>
                </a>

    


              </div>  
              </div>
            </Cell>
          </Grid>
          
          
          <br/>
  
      </div>
    )

  }


}

export default AboutMe;