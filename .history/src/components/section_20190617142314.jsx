import classNames from 'classnames'
import PropType from 'prop-types'
import React from 'react'


import './scss/section.scss'
const PADDING_LARGE = 'large'
const PADDING_SMALL = 'small'

const Section = ({
    bgImage, gray, id, padding
  }) => {
    const className = classNames('Section', {
      'Section--bg-Image': bgImage,
      'Section--gray': gray,
      'Section--padding-large': padding === PADDING_LARGE,
      'Section--padding-small': padding === PADDING_SMALL,
      'Section--rounded-bottom': roundedBottom,
      'Section--rounded-top': roundedTop,
    });
  
    return (
      <section className={className} id={id}>
        
      </section>
    );
  };
  
  Section.PADDING_LARGE = PADDING_LARGE;
  Section.PADDING_SMALL = PADDING_SMALL;
  
  Section.propTypes = {
   bgImg: PropTypes.bool,
    gray: PropTypes.bool,
    id: PropTypes.string,
    padding: PropTypes.oneOf([PADDING_LARGE, PADDING_SMALL]),
    
  };
  
  Section.defaultProps = {
    bgImage: false,
    gray: false,
    id: undefined,
    padding: undefined,
    roundedBottom: false,
    roundedTop: false,
  };
  
  export default Section;