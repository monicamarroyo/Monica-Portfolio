/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import get from 'lodash/get';
import Helmet from 'react-helmet';

import App from './app';
import ErrorBoundary from './errorBoundary';
import Sidebar from './sidebar';
import { PAGE_CONTENT_ID, PAGE_CONTENT_CONTAINER_ID } from '../constants.js';

import '../scss/custom-bootstrap.scss';
import '../scss/fonts.scss';
import '../scss/global-styles.scss';
import '../scss/icons.scss';

const siteTitle = 'Monica Arroyo';
const getSiteDescription = data => get(data, 'site.siteMetadata.description');
const getSiteUrl = data => get(data, 'site.siteMetadata.siteUrl');

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
