import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

import { Col, Container, Row } from "reactstrap"

import { default as Layout } from "../components/layout"
import SocialLink from "../components/socialLink"
import Navbar from "../components/navbar"
import MainHeader from "../components/header"
import Section from "../components/section"
import SectionHeader from "../components/sectionHeader"
import ContactForm from "../components/contactForm"
import Pulse from "react-reveal"
import HTML from "../components/html"
//import RepeatTypist from "../components/typist"
//import Layout from "../components/layout"
//import Image from "../components/image"
//import SEO from "../components/seo"
import "../components/scss/typist.scss"

const IndexPage = ({ scrollTop, toggleSidebar, data }) => (
  <div>
    <div className="stars" />
    <div className="stars2" />
    <div className="stars3" />
    <Navbar solid={scrollTop > 0} toggleSidebar={toggleSidebar} />
    <main>
      <div id="home">
        <Section bgImage>
          <Section padding={Section.PADDING_LARGE}>
            <Container>
              <MainHeader title="Hello">
                <SocialLink icon="paperplane" to="https://twitter.com" />
                <SocialLink icon="paperplane" to="https://twitter.com" />
                <SocialLink icon="paperplane" to="https://twitter.com" />
              </MainHeader>
            </Container>
          </Section>
        </Section>
      </div>

      <Section id="about-me" padding={Section.PADDING_SMALL}>
        <Container>
          <Pulse>
            <SectionHeader
              index={4}
              title="About Me."
              description="Learn more about who I am and why I love what I do."
            />
            <Row className="text-center mb-3">
              <Col md="6">
                <Img 
                alt="monica arroyo"
                className="img-fluid rounded-circle mb-5"
                fixed={data.myPicture.childImageSharp.fixed}
                />
                <h1>My picture and shit</h1>
              </Col>
              <Col md="6">
                <HTML>{data.aboutMeDevMarkdown.html}</HTML>
              </Col>
            </Row>
          </Pulse>
        </Container>
      </Section>
      <Section id="projects" gray padding={Section.PADDING_SMALL}>
        <Container>
          <Pulse>
            <h1>projects</h1>
          </Pulse>
        </Container>
      </Section>
      <Section id="skills" gray padding={Section.PADDING_SMALL}>
        <Container>
          <Pulse>
            <h1>skills</h1>
          </Pulse>
        </Container>
      </Section>
      <Section id="contact-me" padding={Section.PADDING_SMALL}>
        <Container>
          <Pulse>
            <SectionHeader
              index={4}
              title="Contact Me"
              description="I'd Love To Hear From You."
            />
          </Pulse>
          <Row className="text-center mb-3">
            <Col md="4">
              <div className="contact-item">
                <SocialLink icon="paperplane" to="https://twitter.com" />
              </div>
              <p className="socialName">Linkedin</p>
            </Col>
            <Col md="4">
              <div className="contact-item">
                <SocialLink icon="paperplane" to="https://twitter.com" />
              </div>
              Github
            </Col>
            <Col md="4">
              <div className="contact-item">
                <SocialLink icon="paperplane" to="https://twitter.com" />
              </div>
              Email
            </Col>
          </Row>
          <ContactForm />
        </Container>
      </Section>
    </main>
  </div>
)

//"Intro", "Skillset", "Values", "Showcase", "My Story"
//"Home", "About Me", "Projects", "Skills", "Contact Me"
IndexPage.propTypes = {
  //  data: PropTypes.object.isRequired,
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
/*
<Layout
    render={({ scrollTop, toggleSidebar }) => (
      <IndexPage
        scrollTop={scrollTop}
        toggleSidebar={toggleSidebar}
        {...props}
      />
    )}
  />
*/

/*
 <Layout
    render={({ scrollTop, toggleSidebar }) => (
      <IndexPage
        scrollTop={scrollTop}
        toggleSidebar={toggleSidebar}
        {...props}
      />
    )}
  />

*/
/*
 <Layout
    render={({ scrollTop, toggleSidebar }) => (
      <StaticQuery
        query={graphql`
          query IndexQuery {
            aboutMeDeveloperMarkdown: markdownRemark(
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
        render={data => <IndexPage 
         data={data}
         scrollTop={scrollTop}
         toggleSidebar={toggleSidebar}
         {...prop}
        />}
      />
    )}
  />
 <Layout
    render={({ scrollTop, toggleSidebar }) => (
      <IndexPage
        scrollTop={scrollTop}
        toggleSidebar={toggleSidebar}
        {...props}
      />
    )}
  />
*/

/*

*/
