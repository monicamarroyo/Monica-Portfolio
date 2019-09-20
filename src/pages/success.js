import { Link } from "gatsby"
import React from "react"
import { Container } from "reactstrap"

import { default as Layout } from "../components/layout"


export const Success = () => (
  <section className="pt-5 text-center" style={{backgroundColor: "#193C46", height: "100vh", padding: "5rem"}}>
    <Container style={{paddingTop:"10rem"}}>
      <h1 className="text-primary" style={{color:"#fff"}}>Success</h1> 
      <h3 style={{color:"#fff"}}>
        Thank you for sending me a message :) <Link to="/">Go to the home page</Link>
      </h3>
    </Container>
  </section>
)

const SuccessContainer = () => <Layout render={() => <Success />} />

export default SuccessContainer
