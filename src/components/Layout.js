import React from 'react'
import PropTypes from "prop-types"
import Header from './Header'
import Footer from './Footer'
import { useStaticQuery, graphql } from "gatsby"


export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <Footer />
    </>

  )
}

Layout.prototype = {
  children: PropTypes.node.isRequired,
}