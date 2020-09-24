/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import Header from "../sections/header/Header"
import Fotter from "../sections/footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div style={{ margin: `0 auto` }}>
        <main>{children}</main>
      </div>
      <Fotter />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
