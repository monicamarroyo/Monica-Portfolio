import PropTypes from "prop-types"
import React, { useState, useEffect, useRef } from "react"
//import Typist from "react-typist"

const RepeatTypist = () => {

   return (
    <Typist loop={true}  >
  <span> First Sentence </span>
  <Typist.Backspace count={8} delay={200} />
  <span> Phrase </span>
</Typist>
   )
  
}


export default RepeatTypist
/*
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
 
*/