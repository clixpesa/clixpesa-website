import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function AboutUs() {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        markdownRemark(id: { eq: "3b6e2108-3c0c-5d22-af99-08fcea576bcd" }) {
          html
        }
      }
    `
  )

  return (
    <>
      <section class="bg-teal-50">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
            About Us
          </h2>
          <div
            className="max-w-none text-gray-600 text-center"
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          ></div>
        </div>
      </section>
    </>
  )
}
