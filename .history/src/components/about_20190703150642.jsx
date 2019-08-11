import React from "react"
import { StaticQuery, graphql } from "gatsby"
import HTML from '../components/html'
import Img from 'gatsby-image'
import {Container, Row, Col} from 'reactstrap'


export const About = ({ data }) =>
(
 <Container>

 </Container>
)








export const query = graphql`
  query {
    aboutMeDevMarkdown: markdownRemark(
      frontmatter: { type: { eq: "about-me-developer" } }
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
`
