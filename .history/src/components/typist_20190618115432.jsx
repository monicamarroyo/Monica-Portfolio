import PropTypes from "prop-types"
import React, { useState, useEffect, useRef } from "react"
import Typist from "react-typist"

const RepeatTypist = () => {
  const [count, setCount] = useState(1)

  useEffect(() => {
    setCount(1)
  }, [count])

  return (
    <div>
      <div>Hi, there</div>
      <div>
      <span>I Am </span>
        {count ? (
          
          <Typist cursor={{ blink: true, hideWhenDone: true }}>
          
            <Typist.Delay ms={1000} />
            Monica Arroyo
            <Typist.Backspace count={13} delay={3000} />
            <Typist.Delay ms={100} />
            Developer
            <Typist.Backspace count={9} delay={3000} />
            <Typist.Delay ms={100} />
            Designer
            <Typist.Backspace count={9} delay={3000} />
          </Typist>
        ) : (
          ""
        )}
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
