import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ViewList from "../components/viewList"

function ServicePage(props) {
  return (
    <Layout>
      <Link to="/">Home</Link>
      <SEO title="World Service" />
      {props.data.allServiceJson.nodes[0].data.map((item, index) => {
        return <ViewList key={index} data={item} />
      })}
    </Layout>
  )
}

export default ServicePage

export const query = graphql`
  {
    allServiceJson {
      nodes {
        data {
          id
          title
          description
          imgSrc {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
