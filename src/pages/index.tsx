import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-4xl text-center">Gatsby Starter Simple Tailwind</h1>
    <p className="text-center my-4">
      Simple Tailwind is the easiest way to get started with a blank Tailwind
      canvas. PurgeCSS is set up by default, and there's no extra components to
      delete. Just start writing your class names and you're good. 😉
    </p>
  </Layout>
)

export default IndexPage
