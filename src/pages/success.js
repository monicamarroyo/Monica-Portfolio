import { Link } from "gatsby"
import React from "react"
import { Container } from "reactstrap"

import { default as Layout } from "../components/layout"


export const Success = () => (
  <section className="pt-5 text-center">
    <Container>
      <h1 className="text-primary">Success</h1> 
      <p>
        Thank you for sending me a message :) <Link to="/">Go to the home page</Link>
      </p>
    </Container>
  </section>
)

const SuccessContainer = () => <Layout render={() => <Success />} />

export default SuccessContainer
