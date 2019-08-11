import PropTypes from 'prop-types'
import React from 'react'
//for Animated 
import Plx from 'react-plx'


class Animation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            //ease-in-out
            easing : undefined,
            time: 500
        }
    }
    componentDidMount() {
        const isSmallScreen = window.innerHeight < 900;

        if(isSmallScreen) {
            
        }
    }
}
