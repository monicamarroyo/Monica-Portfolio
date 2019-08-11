import React, { useState, useEffect, useRef } from "react"
import Typist from "react-typist"

const RepeatTypist = () => {
  const [count, setCount] = useState(1)

  useEffect(() => {
    setCount(1)
  }, [count])

  return (
    <div className="moi">
      <div className="moi__answer">
        {count ? (
          <Typist
            cursor={{ blink: true, hideWhenDone: true }}
            onTypingDone={() => setCount(0)}
          >
           <span>I Am </span>
            <Typist.Delay ms={2300} />
            Monica Arroyo
            <Typist.Delay ms={700} />
            <Typist.Backspace count={13} delay={3000} />
            <Typist.Delay ms={100} />
            Developer
            <Typist.Backspace count={9} delay={3500} />
            Designer
            <Typist.Backspace count={8} delay={3000} />
          </Typist>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default RepeatTypist
