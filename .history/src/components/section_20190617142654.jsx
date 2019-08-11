import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { Children } from 'react'


import './scss/section.scss'
const PADDING_LARGE = 'large'
const PADDING_SMALL = 'small'

const Section = ({
    children,bgImage, gray, id, padding
  }) => {
    const className = classNames('Section', {
      'Section--bg-Image': bgImage,
      'Section--gray': gray,
      'Section--padding-large': padding === PADDING_LARGE,
      'Section--padding-small': padding === PADDING_SMALL
      
    });
  
    return (
      <section className={className} id={id}>
      {children}
      </section>
    );
  };
  
  Section.PADDING_LARGE = PADDING_LARGE;
  Section.PADDING_SMALL = PADDING_SMALL;
  
  Section.propTypes = {
    bgImage: PropTypes.bool,
    gray: PropTypes.bool,
    id: PropTypes.string,
    padding: PropTypes.oneOf([PADDING_LARGE, PADDING_SMALL]),
    
  };
  
  Section.defaultProps = {
    bgImage: false,
    gray: false,
    id: undefined,
    padding: undefined,
   
  };
  
  export default Section;