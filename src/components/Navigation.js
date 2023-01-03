import React from "react"
import { Link } from "gatsby"

export default function Navigation() {
  return (
    <>
      <ul className="flex items-center hidden space-x-8 lg:flex">
        <li>
          <Link
            to="/"
            aria-label="clixpesa"
            title="clixpesa"
            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-600"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/"
            aria-label="key features"
            title="key features"
            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-600"
          >
            Key Features
          </Link>
        </li>
        <li>
          <Link
            href="/"
            aria-label="about us"
            title="about us"
            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-600"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/"
            aria-label="our blog"
            title="our blog"
            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-600"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/"
            aria-label="frequently asked qs"
            title="Faqs"
            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-600"
          >
            FAQs
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            aria-label="frequently asked qs"
            title="Faqs"
            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-600"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <ul className="flex items-center hidden space-x-8 lg:flex">
        <li>
          <Link
            to="/"
            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-700 hover:bg-teal-500 focus:shadow-outline focus:outline-none"
          >
            Notify Me
          </Link>
        </li>
      </ul>
    </>
  )
}
