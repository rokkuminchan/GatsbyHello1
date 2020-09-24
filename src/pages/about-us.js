import React from "react"

import Layout from "../components/layout"
import Philosophy from "../sections/Philosophy"
import UniversityList from "../sections/about us/UniversityList"
import MemberIntroduction from "../sections/MemberIntroduction"
import TeamWork from "../sections/TeamWork"
import SEO from "../components/seo"

const AboutUsPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="World's team" />
      <Philosophy data={data.ourTeamJson.philosophy} />
      <UniversityList data={data.ourTeamJson.university} />
      <TeamWork data={data.ourTeamJson.teamwork} />
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
                fluid(maxWidth: 1920, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        description
        title
      }
      teamwork {
        image {
          src {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        img {
          src {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        title
        description {
          title
          subtitle
        }
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
                fluid(maxWidth: 1920, quality: 100) {
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
