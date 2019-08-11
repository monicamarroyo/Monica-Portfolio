import React, { useState, useEffect, useRef } from "react"
import Typist from "react-typist"
import TypistLoop from "react-typist-loop"
import { Col, Container, Row } from "reactstrap"
import Heading from "./headings"
import "./scss/typist.scss"

const RepeatTypist = () => {
  return (
    <header className="text-center pb-5">
      <Container>
        <Row className="justify-content-center">
     
          I am 
          <TypistLoop>
            {["Monica Arroyo", "a Full-Stack Developer", "a Designer"].map(
              text => (
                <Typist key={text} startDelay={1000}>
                  {text}
                  <Typist.Backspace count={text.length} delay={200} />
                </Typist>
              )
            )}
          </TypistLoop>
          
        </Row>
      </Container>
    </header>
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
