import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import * as React from 'react'

export const Kyle: React.StatelessComponent<{}> = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "kyle.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 512) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} style={{ borderRadius: '50%' }} />}
  />
)
