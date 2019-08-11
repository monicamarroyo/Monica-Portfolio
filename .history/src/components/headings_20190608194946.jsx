import classNames from 'classnames'
import range from 'lodash/range'
import PropTypes from 'prop-types'
import React from 'react'

import Icon from './icon'
import './scss/heading.scss'

const Heading = ({
    children, className, extraBold, icon, light, size,
  }) => {
    const TitleTag = `h${size}`
    const extendedClassName = classNames(`Heading ${className}`, {
      'Heading--extra-bold': extraBold,
      'Heading--light': light,
    })
  
    return (
      <TitleTag className={extendedClassName}>
        {icon && (
          <span className="Heading__icon">
            <Icon name={icon} />
          </span>
        )}
        {children}
      </TitleTag>
    )
  }

  Heading.propTypes = {
      
  }