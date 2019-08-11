import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'


const RepeatTypist = () => {
 const [done, setDone] = useState(true)

 useEffect(() => {
    setDone(true)
 }, [done])
 return (
    {
        done ? (
         <Typist onTypingDone={() => setDone(false)}>
         <span>I am Monica Arroyo</span>
         <Typist.Backspace count={13} delay={200} />
         <span>Developer</span>
       </Typist>

        ) : ( "")
      }
 )
}

export default RepeatTypist