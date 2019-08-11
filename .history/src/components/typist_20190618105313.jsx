import PropTypes from "prop-types"
import React, { useState, useEffect, useRef } from "react"
import Typist from "react-typist"
//import {useDebounce} from 'use-debounce'
import {throttle} from 'lodash'
const RepeatTypist = () => {
    const [count, setCount] = useState(1);
    const throttled = useRef(throttle((newValue) => console.log(newValue), 1000))
    useEffect(() => {
      // document.title = `You clicked ${count} times`;
      console.log("Count: " + count);
      setCount(1);
    }, [count]);
  return (
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
  )
}


export default RepeatTypist
/*

 
*/