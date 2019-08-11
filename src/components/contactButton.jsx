import React from 'react';

import Button from './button';
import {CONTACT_EMAIL} from '../constants'
//import { CONTACT_EMAIL } from 'constants';

const ContactButton = props => (
  <Button
    className = "contact-btn"
    color="primary"
    icon="paperplane"
    tag="a"
    href={`mailto:${CONTACT_EMAIL}`}
    {...props}
  >
    Get in touch
  </Button>
);

export default ContactButton;