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
            stdTypingDelay={0}
            cursor={{ blink: true, hideWhenDone: true }}
            onTypingDone={() => setCount(0)}
          >
           
            <Typist.Delay ms={2000} />
            I Am Monica Arroyo
            <Typist.Delay ms={3000} />
            <Typist.Backspace count={13} delay={200} />
            <Typist.Delay ms={1000} />
            Developer
            <Typist.Delay ms={3000}/>
            <Typist.Backspace count={9} delay={2000} />
            <Typist.Delay ms={1000}/>
            Designer
            <Typist.Delay ms={3000}/>
            <Typist.Backspace count={13} delay={3000} />
            <Typist.Delay ms={1000}/>
          </Typist>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default RepeatTypist
