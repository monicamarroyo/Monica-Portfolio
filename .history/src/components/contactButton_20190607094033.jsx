import React from 'react';

import Button from './button';
import {CONTACT_EMAIL} from '../constants'
//import { CONTACT_EMAIL } from 'constants';

const ContactButton = props => (
  <Button
    color="primary"
    icon="contact"
    tag="a"
    href={`mailto:${CONTACT_EMAIL}`}
    {...props}
  >
    Get in touch
  </Button>
);

export default ContactButton;