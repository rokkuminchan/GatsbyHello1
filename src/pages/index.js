import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Link to="/technology-page">Technology</Link> <br />
    <Link to="/about-us">About us</Link> <br />
    <SEO title="Home" />
  </Layout>
)

export default IndexPage
