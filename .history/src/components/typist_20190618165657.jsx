import React, { useState, useEffect, useRef } from "react"
import Typist from "react-typist"
import "./scss/typist.scss"
import { set } from "idb-keyval";
import { setTimeout } from "core-js";

const RepeatTypist = () => {
  const [count, setCount] = useState(1)

  useEffect(() => {

    setTimeout(() => {
      setCount(1)
    }, 2000);
   
    

  }, [])

  return (
    <div className="main_header_typist">
      {count ? (
        <Typist
          stdTypingDelay={0}
          avgTypingDelay={100}
          cursor={{ blink: true, hideWhenDone: true }}
          onTypingDone={() => setCount(0)}
        >
          <Typist.Delay ms={2000} />
          I Am Monica Arroyo
          <Typist.Delay ms={200} />
          <Typist.Backspace count={13} delay={200} />
          <Typist.Delay ms={500} />
          Developer
          <Typist.Delay ms={2000} />
          <Typist.Backspace count={9} delay={200} />
          <Typist.Delay ms={500} />
          Designer
          <Typist.Delay ms={2000} />
          <Typist.Backspace count={13} delay={200} />
          <Typist.Delay ms={500} />
        </Typist>
      ) : (
        <span className="main_header_text">I am Monica Arroyo</span>
      )}
    </div>
  )
}

export default RepeatTypist
