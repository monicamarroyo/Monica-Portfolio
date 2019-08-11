import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import Typist from "react-typist"
const RepeatTypist = () => {
    const [count, setCount] = useState(1);

    useEffect(() => {
      // document.title = `You clicked ${count} times`;
      console.log("Count: " + count);
      setCount(1);
    }, [count]);
  return (
    <div>
      {done ? (
        <Typist avgTypingDelay= {50} onTypingDone={() => setDone(false)}>
          <span>I am Monica Arroyo</span>
          <Typist.Backspace count={13} delay={800} />
          <span>Developer</span>
        </Typist>
      ) : (
        ""
      )}
    </div>
  )
}

export default RepeatTypist
