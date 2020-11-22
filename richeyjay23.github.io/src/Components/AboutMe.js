import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'

class AboutMe extends Component {
  render() {
    return (

      <div style={{width: '100%', margin: 'auto'}}>
          <Grid className='home-grid'>
            <Cell col={12}>
                <img 
                src='https://cdn2.iconfinder.com/data/icons/seo-and-development-3-1/164/145-512.png'
                alt="Avatar icon"
                className="avatar-img"
                />
                <div className="banner-text">
                  <h1>Hey! My name's Ganesh!</h1>
                    <h3>Get to know me!</h3>

                  <hr/>


                <p> 

                  Hey, my name's Ganesh Jainarain but some people call me Richey Jay. 
                  I’m a 21-year-old born in Guyana, came to New York City in 2002, 
                  and lived in the Bronx ever since. As a kid growing up I was always fascinated by puzzles and strategic games. 
                  For example, I am an avid chess player and can also solve a Rubik’s cube in less than a minute. 
                  During my senior year of high school, my economics professor allured me into the world of investing and stock trading. 
                  Ever since then I’ve used my programming skills that I’ve honed from my Computer Science classes to better invest and trade stock options. 
                  My goal was to always create innovative programs to increase the feasibility of everyday life for people. 

                </p>
              <div className="social-links">

      

                console.log("p");

    


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