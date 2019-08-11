import React, { useState, useEffect, useRef } from "react"
import Typist from "react-typist"
import TypistLoop from "react-typist-loop"
import "./scss/typist.scss"

const RepeatTypist = () => {
  return (
    <div>
       <h1 className="main_header_text">I Am </h1>
      <TypistLoop>
      
        {["Monica Arroyo", "a Full-Stack Developer", "a Designer"].map(text => (
          <Typist className="fuck" key={text} startDelay={1000}>
          I Am {text}
           <Typist.Backspace count={text.length} delay = {200}/>
          </Typist>
        ))}
      </TypistLoop>
    </div>
  )
}

export default RepeatTypist
/*
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

*/
