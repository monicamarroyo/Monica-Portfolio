import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import Typist from "react-typist"
const RepeatTypist = () => {
  const [done, setDone] = useState(true)

  useEffect(() => {
    setDone(true)
  }, [done])
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
