import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/seo"

export default function RoscasPage({ data }) {
  const html = data.file?.childMarkdownRemark?.html
  return (
    <Layout>
      <Seo
        title="Clixpesa Roscas"
        description="How Clixpesa is Digitizing Chamas: The Future of RoSCAs"
      />
      <div className="bg-teal-50 min-h-screen py-12">
        <div className="max-w-3xl mx-auto px-4">
          {html ? (
            <div
              className="prose prose-teal max-w-none"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ) : (
            <div className="text-center text-gray-600">Content not found.</div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "roscas.md" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`
