import { Link } from "gatsby"
import React from "react"
import { Container } from "reactstrap"

import { default as Layout } from "../components/layout"


export const NotFoundPage = () => (
  <section className="pt-5 text-center">
    <Container>
      <h1 className="text-primary">404</h1> NOT FOUND
      <p>
        This page doesn&apos;t exist. <Link to="/">Go to the home page</Link>
      </p>
    </Container>
  </section>
)

const NotFoundPageContainer = () => <Layout render={() => <NotFoundPage />} />

export default NotFoundPageContainer
