import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"

export default function Home() {
  return (
    <Layout>
      <Header headerText="Homesite" />
      <p>Random Bild:</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Layout>
  )
}