import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'


const RepeatTypist = () => {
 const [done, setDone] = useState(true)

 useEffect(() => {
    setDone(true)
 }, [done])

}

export default RepeatTypist