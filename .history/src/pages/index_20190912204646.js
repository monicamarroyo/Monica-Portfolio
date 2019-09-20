import React from "react"
import { graphql, StaticQuery } from "gatsby"

import PropTypes from "prop-types"

import { Col, Container, Row } from "reactstrap"

import { default as Layout } from "../components/layout"
import SocialLink from "../components/socialLink"
import Navbar from "../components/navbar"
import MainSection from "./mainSection"
import Section from "../components/section"
import SectionHeader from "../components/sectionHeader"
import ContactForm from "../components/contactForm"
import ContactSection from "./contact"
import Pulse from "react-reveal"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import AboutSection from "./about"

import "../components/scss/index.scss"
import { red } from "ansi-colors"
import styled from "styled-components"

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
