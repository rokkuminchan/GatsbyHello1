import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ViewList from "../components/viewList"

function TechnologyPage({ data }) {
  return (
    <Layout>
      <Link to="/">Home</Link>
      <SEO title="World Technology" />
      {data.technologyJson.data.map((item, index) => {
        return <ViewList key={index} data={item} />
      })}
    </Layout>
  )
}

export default TechnologyPage

export const query = graphql`
  {
    technologyJson {
      data {
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
`
