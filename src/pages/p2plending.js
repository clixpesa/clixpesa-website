import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/seo"

export default function PeerLendingPage({ data }) {
  const { html } = data.file?.childMarkdownRemark
  return (
    <Layout>
      <Seo
        title="Clixpesa p2p Loans"
        description="Borrow and lend at your own terms, with Clixpesa peer to peer loans"
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
    file(relativePath: { eq: "peerlending.md" }) {
      childMarkdownRemark {
        html
        frontmatter {
          title
        }
      }
    }
  }
`
