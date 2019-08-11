import PropTypes from "prop-types"
import React, { useState, useEffect, useRef } from "react"
import Typist from "react-typist"

const RepeatTypist = () => {

  const [count, setCount] = useState(1);

  useEffect(() => {
      setCount(1);
  }, [count]);
  
  return (
      <div className="moi">
      <div className="moi__moi">Hi, there<span className="moi__moi--small">'s</span></div>
          <div className="moi__question" style={{height: '26px'}}>
              {
                  (count) ? 
                  <Typist cursor={{blink: true, hideWhenDone: true}}>
                      <Typist.Delay ms={1000} />
                      website?
                      <Typist.Backspace count={8} delay={3000} />
                      <Typist.Delay ms={100} />
                      portfolio?
                      <Typist.Backspace count={10} delay={3000} />
                      <Typist.Delay ms={100} />
                      playground?
                      <Typist.Backspace count={10} delay={3000} />
                  </Typist>
                  : ('')
              }
          </div>
          
          
      </div>
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
 
