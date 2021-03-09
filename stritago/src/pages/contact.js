import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"

export default function Contact() {
  return (
    <Layout>
      <Header headerText="Contact" />
      <p>Send us a message!</p>
      <p>
        <a href="mailto:me@example.com">me@example.com</a>
      </p>
    </Layout>
  )
}