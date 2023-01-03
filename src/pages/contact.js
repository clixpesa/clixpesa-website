import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import ContactForm from "../components/ContactForm"

const ContactPage = () => (
  <Layout>
    <Seo title="Clixpesa" />
    <ContactForm />
  </Layout>
)

export const Head = () => <Seo title="Contact Us" />

export default ContactPage
