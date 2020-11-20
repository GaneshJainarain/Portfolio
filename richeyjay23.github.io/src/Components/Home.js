import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'

class Home extends Component {
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
                  <h1>Full Stack Engineer</h1>

                  <hr/>


                <p>HTML | CSS | JavaScript | React | Python | Java Game Development </p>
              <div className="social-links">

                {/* Linkedin */}
                <a href= "https://www.linkedin.com/in/ganesh-jainarain-a95556157/" rel="noreferrer" target="_blank"> 
                <i class=" fa fa-linkedin-square" aria-hidden="true"/>
                </a>

                {/* Github */}
                <a href= "https://github.com/RicheyJay23" rel="noreferrer" target="_blank"> 
                <i class=" fa fa-github-square" aria-hidden="true"/>
                </a>

              </div>  
              </div>
            </Cell>
          </Grid>
          
          
          <h1 className="pretty"> Home </h1>
          <br/>
  
      </div>
    )

  }


}

export default Home;