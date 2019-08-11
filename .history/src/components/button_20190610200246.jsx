import PropTypes from 'prop-types';
import React from 'react';
import { Button as RSbutton } from 'reactstrap';

import Icon from './icon'
import './scss/button.scss'
//import Icon from 'components/Icon';
// {icon && <Icon name={icon} />}
//import './scss/button.scss';

const Button = ({
  children, className, icon, ...otherProps
}) => (
  <RSbutton className={`Button ${className}`} {...otherProps}>
   
    {children}
  </RSbutton>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string,
};

Button.defaultProps = {
  className: undefined,
  icon: undefined,
};

export default Button;