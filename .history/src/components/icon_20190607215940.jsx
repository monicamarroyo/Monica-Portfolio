import PropTypes from 'prop-types'
import React from 'react'

const Icon = ({name}) => (
    <i className ={`Icon icon-${name}`}/>
)

Icon.propType = {
    name: PropTypes.string.isRequired
}