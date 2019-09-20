import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import Img from "gatsby-image"
import "../components/scss/projects.scss"

const Projects = ({ data }) => (
    <div>
        hello
    </div>
)


const ProjectSection = props => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        bgBlue: file(relativePath: { eq: "bluewood.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Projects data={data} {...props} />}
  />
)

export default ProjectSection
