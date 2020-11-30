import React, { Component } from 'react';
import { Grid, Cell, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>

            <h2>Send me a Message</h2>
            <div class="container">

            <form action="https://formspree.io/f/xknpvqbp" method="POST" rel="noreferrer" target="_blank">
                  <div class="row">
                    <div class="col-25">
                      <label for="fname">First Name</label>
                  </div>
                  <div class="col-75">
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                  </div>
                    </div>
                    <div class="row">
                      <div class="col-25">
                        <label for="lname">Last Name</label>
                      </div>
                      <div class="col-75">
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-25">
                        <label for="email">Email</label>
                      </div>
                      <div class="col-75">
                      <input type="text" id="email" name="email" placeholder="Your Email Address.."/>
                      </div>
                    </div>
                    
                    <div class="row">
                            <div class="col-25">
                              <label for="subject">Subject</label>
                            </div>
                            <div class="col-75">
                              <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
                            </div>
                          </div>
                          <div class="row">
                            <br/>
                            <input type="submit" name="submit" />
                          </div>
                    </form>
                  </div>
                              
                              





          </Cell>
          <Cell col={6}>
          <h2>Contact Me</h2>
            <hr/>
              
                <div>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton', color: "white",}}>
                  <br/>
                  <br/>

                    <i className="fa fa-phone-square" aria-hidden="true"/>
                     347-543-1736
                  </ListItemContent>
                  </div>
                

                <div>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton', color: "white"}}>
                    
                    <br/>
                    <br/>
                    <br/>
                    <hr/>
                    <br/>
                    <br/>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    RicheyJay2@gmail.com
                  </ListItemContent>
                  <br/>
                  <br/>
                  <br/>
                  <hr/>
                </div>
                


              
            
          </Cell>
          
        </Grid>
      </div>
    )
  }
}

export default Contact;