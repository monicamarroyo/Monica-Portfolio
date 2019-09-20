//This is for coverting foo bar to foo-bar
import kebabCase from 'lodash/kebabCase';
//variable for my email
export const CONTACT_EMAIL = 'monica.arroyo1319@gmail.com';
//names for navigation links
const NAV_LINK_NAMES = ['Home', 'About Me', 'Projects', 'Contact Me'];
//variable for nav links converted into kabacase
export const NAV_LINKS = NAV_LINK_NAMES.map(name => ({
  name,
  href: kebabCase(name),
}));

export const PAGE_CONTENT_ID = 'page-content';
export const PAGE_CONTENT_CONTAINER_ID = 'page-content-container';
