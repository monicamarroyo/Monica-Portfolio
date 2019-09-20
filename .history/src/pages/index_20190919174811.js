import React from "react"
import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import { default as Layout } from "../components/layout"
import Navbar from "../components/navbar"
import MainSection from "./main"
import AboutSection from "./about"
import ProjectSection from "./projects"
import ContactSection from "./contact"
//import Pulse from "react-reveal"
import nimation from '../components/animation'

const IndexPage = ({ scrollTop, toggleSidebar, data }) => (
  <div>
    <Navbar solid={scrollTop > 0} toggleSidebar={toggleSidebar} />
    <main>
      <animation>
        <section id="home">
          <MainSection />
        </section>
        <section id="about-me">
          <AboutSection />
        </section>
        <section id="projects">
          <ProjectSection />
        </section>
        <section id="contact-me">
          <ContactSection />
        </section>
      </animation>
    </main>
    <div
      className="footer-copyright text-center py-3"
      style={{ backgroundColor: "#E2C5B6" }}
    >
      <div>
        &copy; {new Date().getFullYear()} Copyright: Monica Arroyo insipired by
        many designers
      </div>
    </div>
  </div>
)

IndexPage.propTypes = {
  scrollTop: PropTypes.number.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
}

const IndexPageContainer = props => (
  <Layout
    render={({ scrollTop, toggleSidebar }) => (
      <StaticQuery
        query={graphql`
          query MyQuery {
            aboutMeDevMarkdown: markdownRemark(
              frontmatter: { type: { eq: "about-me-developer" } }
            ) {
              html
            }
            aboutMeJourneyMarkdown: markdownRemark(
              frontmatter: { type: { eq: "about-me-journey" } }
            ) {
              html
            }
            aboutMeMoreMarkdown: markdownRemark(
              frontmatter: { type: { eq: "about-me-more" } }
            ) {
              html
            }
          }
        `}
        render={data => (
          <IndexPage
            data={data}
            scrollTop={scrollTop}
            toggleSidebar={toggleSidebar}
            {...props}
          />
        )}
      />
    )}
  />
)

export default IndexPageContainer
