import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Seo from "../components/seo"
import Content from "../components/Content"
import LatestBlogs from "../components/LatestBlogs"
import CallToAction from "../components/CallToAction"

const IndexPage = () => (
  <Layout>
    <Seo title="Clixpesa" />
    <Hero />
    <Features />
    <Content />
    <LatestBlogs />
    <CallToAction />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Clixpesa" />

export default IndexPage
