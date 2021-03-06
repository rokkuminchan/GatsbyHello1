import React from "react"

import Layout from "../components/layout"
import Vision from "../sections/Vision"
import UniversityIntroduction from "../sections/about us/UniversityIntroduction"
import UniversityList from "../sections/about us/UniversityList"
import MemberIntroduction from "../sections/MemberIntroduction"
import TeamWork from "../sections/TeamWork"
import SEO from "../components/seo"
import UniversityHeader from "../sections/about us/UniversityHeader"
import Mission from "../sections/Mission"

const AboutUsPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="World's team" />
      <Mission data={data.ourTeamJson.mission} />
      <Vision data={data.ourTeamJson.vision} />
      <UniversityHeader data={data.ourTeamJson.university.introduction} />
      <UniversityIntroduction data={data.ourTeamJson.university} />
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
          subtitle
          title
          img {
            alt
            src {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
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
      mission {
        description
        title
        img {
          src {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
        values {
          img {
            alt
            src {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
          description
        }
      }
      vision {
        title
        description
        img {
          src {
            childImageSharp {
              fluid {
                srcSet
              }
            }
          }
          alt
        }
        values {
          css
          description
          title
        }
      }
    }
  }
`
