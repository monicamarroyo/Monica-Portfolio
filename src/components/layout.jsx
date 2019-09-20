import React from "react"
import get from 'lodash/get';
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

import App from "./app"
import ErrorBoundary from "./errorBoundary"
import Sidebar from "./sidebar"
import { PAGE_CONTENT_ID, PAGE_CONTENT_CONTAINER_ID } from "../constants.js"

import "../scss/custom-bootstrap.scss"
import "../scss/fonts.scss"
import "../scss/global-styles.scss"
import "../scss/icons.scss"

const siteTitle = "Monica Arroyo"
const getSiteDescription = data => get(data, "site.siteMetadata.description")
const getSiteUrl = data => get(data, "site.siteMetadata.siteUrl")

export const Layout = ({ data, render, children, ...otherProps }) => (
  <ErrorBoundary>
    <App
      render={({ isSidebarOpen, scrollTop, toggleSidebar }) => (
        <React.Fragment>
          <Helmet
            title={get(data, "site.siteMetadata.title")}
            meta={[
              { name: "description", content: getSiteDescription(data) },
              { name: "og:title", content: siteTitle },
              { name: "og:description", content: getSiteDescription(data) },
              { name: "og:url", content: getSiteUrl(data) },
            ]}
          />
          <div id={PAGE_CONTENT_CONTAINER_ID}>
            <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
            <div id={PAGE_CONTENT_ID}>
              {render({ scrollTop, toggleSidebar, ...otherProps })}
            </div>
          </div>
        </React.Fragment>
      )}
    />
  </ErrorBoundary>
)
/*
 
*/

Layout.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        description: PropTypes.string.isRequired,
        siteUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
  render: PropTypes.func.isRequired,
}

const LayoutContainer = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            description
            siteUrl
            title
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)
export default LayoutContainer
