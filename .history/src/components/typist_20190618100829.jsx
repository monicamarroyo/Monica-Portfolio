import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import Typist from "react-typist"

type RestartTypistProps = {
    children: Node
}
const RepeatTypist = (props: RestartingTypistProps) => {
   
}

export default RepeatTypist
/*

 const [count, setCount] = useState(1);

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
*/