import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import PropTypes from "prop-types"
import { default as Layout } from "../components/layout"
import Navbar from "../components/navbar"
import Section from "../components/section"
import MainSection from "./mainSection"
import AboutSection from "./about"
import ProjectSection from "./projects"
import ContactSection from "./contact"
import Pulse from "react-reveal"
import "../components/scss/index.scss"

const IndexPage = ({ scrollTop, toggleSidebar, data }) => (
  <div>
    <Navbar solid={scrollTop > 0} toggleSidebar={toggleSidebar} />
    <main>
      <BackgroundImage Tag="section" fluid={data.bgImage.childImageSharp.fluid}>
        <Section
          bg
          id="home"
          style={{ height: "100vh" }}
          padding={Section.PADDING_LARGE}
        >
          <MainSection />
        </Section>
      </BackgroundImage>
      <Section id="about-me">
        <AboutSection />
      </Section>
      <Section id="contact-me">
        <ContactSection />
      </Section>
      <Section id="projects">
        <ProjectSection />
      </Section>
    </main>
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
            myPicture: file(relativePath: { eq: "me.jpg" }) {
              childImageSharp {
                fixed(width: 160, height: 160) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            bgImage: file(relativePath: { eq: "canyon.jpg" }) {
              childImageSharp {
                fluid(quality: 90, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
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
