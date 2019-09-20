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
      <iframe
        title="404 gif"
        src="https://giphy.com/embed/l1J9EdzfOSgfyueLm"
        width="100%"
        height="480"
        frameBorder="0"
        className="giphy-embed mt-5"
        allowFullScreen
      />
    </Container>
  </section>
)

const NotFoundPageContainer = () => <Layout render={() => <NotFoundPage />} />

export default NotFoundPageContainer
