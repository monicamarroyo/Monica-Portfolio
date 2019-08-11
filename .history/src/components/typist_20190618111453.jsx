import PropTypes from "prop-types"
import React, { useState, useEffect, useRef } from "react"
import Typist from "react-typist"
//import {useDebounce} from 'use-debounce'
//import {throttle} from 'lodash'
//import { render } from "ink";
const RepeatTypist = () => {
   state = {
     typing: true
   } 
   
   done = () => {
    this.setState({ typing: false }, () => {
      this.setState({ typing: true })
    });
  }
    /*
    useEffect(() => {
      // document.title = `You clicked ${count} times`;
      //console.log("Count: " + count);
      setCount(1);
    }, [count]);
    */
   return (
     <div>
       {this.state.typing
      ? <Typist onTypingDone={this.done}>blablabla</Typist>
      : ''
    }
     </div>
    
   )
  
}
/*
<div>
      <p>Loop Text can be written bellow</p>
      {count ? (
        <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
          <span> Your first text goes here</span>
          <Typist.Backspace count={20} delay={800} />
          <span> second text that replaces is here</span>
        </Typist>
      ) : (
        ""
      )}
    </div>
*/

export default RepeatTypist
/*

 
*/