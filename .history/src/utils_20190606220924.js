//[foo bar] => foo-bar what kebabcase does
import kebabCase from 'lodash/kebabCase'

export const CONTACT_EMAIL = 'monica.arroyo1319@gmail.com'

const NAV_LINK_NAMES = ['Intro', 'My Story', 'Projects', 'Skillset', 'Contact Me']
//converting our aray of links into kebab case
export const NAV_LINKS = NAV_LINK_NAMES.map(name => ({
  name,
  href: kebabCase(name),
}))

export const PAGE_CONTENT_ID = 'page-content'
export const PAGE_CONTENT_CONTAINER_ID = 'page-content-container'