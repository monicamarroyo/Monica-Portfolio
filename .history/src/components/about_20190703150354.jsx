import React from 'react'
import { StaticQuery, graphql } from 'gatsby'


export const About = ({data}) => (
    <div>
        hello from the about page
    </div>
)

export const query = graphql `
    query {
        myPicture: file(relativePath: {eq: "me.jpg"}){
            childImageSharp {
                fixed(width: 160, height: 160) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`





