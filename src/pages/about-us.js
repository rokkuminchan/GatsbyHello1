import React from "react"

// import Header from "../sections/header/Header"
// import Footer from "../sections/footer/Footer"
import Layout from "../components/layout"
import Philosophy from "../sections/Philosophy"
import UniversityList from "../sections/about us/UniversityList"
import MemberIntroduction from "../sections/MemberIntroduction"
import SEO from "../components/seo"

const AboutUsPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="World's team" />
      <Philosophy data={data.ourTeamJson.philosophy} />
      <UniversityList data={data.ourTeamJson.university} />
      <MemberIntroduction data={data.ourTeamJson.memberIntroduction} />
    </Layout>
  )
}

export default AboutUsPage

export const query = graphql`
  {
    ourTeamJson {
      memberIntroduction {
        memberList {
          description
          title
          img {
            src {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        description
        title
      }
      university {
        introduction {
          description
          title
        }
        universityItems {
          color
          description {
            subtitle
            title
          }
          img {
            alt
            src {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          link
          name
        }
      }
      philosophy {
        mindsets {
          description
          title
        }
        title
        values {
          css
          description
          title
        }
      }
    }
  }
`
