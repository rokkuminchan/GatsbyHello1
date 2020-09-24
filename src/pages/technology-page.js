import React from "react"

import Layout from "../components/layout"
import Introduction from "../sections/Introduction"
import TechnologyList from "../sections/TechnologyList"
import SEO from "../components/seo"

const TechnologyPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="World technology" />
      <Introduction data={data.technologyJson.introduction} />
      <TechnologyList data={data.technologyJson.technologyList} />
    </Layout>
  )
}

export default TechnologyPage

export const query = graphql`
  {
    technologyJson {
      introduction {
        description
        title
      }
      technologyList {
        description
        link
        title
        img {
          src {
            childImageSharp {
              fluid(maxWidth: 1080, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
