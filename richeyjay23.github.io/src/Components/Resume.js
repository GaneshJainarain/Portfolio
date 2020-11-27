import React, {Component} from 'react'
import {Grid, Cell, Button} from 'react-mdl'

class Resume extends Component {
  render() {
    return (
        <div className='resume'>
            <iframe
            src="https://docs.google.com/document/d/e/2PACX-1vSgDr6uJtiidJGJwfqA_ZwxPFnc0ueGBLfCk6ka2pNSTeLFowgy1jh1VlFsFfmpMGlxKScTYaW3RrGQ/pub?embedded=true" onload='javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this));' >
            </iframe>
        </div>
        )
  }

}


    export default Resume;