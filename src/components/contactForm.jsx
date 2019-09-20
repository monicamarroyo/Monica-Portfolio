import React, { Component } from "react"
import { navigate } from "gatsby"

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.ContactForm = React.createRef()
    this.state = {}
  }
  encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = this.ContactForm.current

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(response => {
        console.log("====================================")
        console.log(`${JSON.stringify(response, null, 2)}`)
        console.log("====================================")
        navigate(form.getAttribute("action"))
      })
      .catch(error => {
        console.log("====================================")
        console.log(`error in submiting the form data:${error}`)
        console.log("====================================")
      })
  }
  render() {
    return (
      <form
        name="contact"
        method="post"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
        ref={this.ContactForm}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </p>
        <label className="contact-form-label">
          Name:
        </label>
        <input
          type="text"
          className="input contact-input w-input"
          max="256"
          name="name"
          onChange={this.handleChange}
          placeholder="Your name"
          //id="name"
          required=""
        />
        <label className="contact-form-label">
          Email:
        </label>
        <input
          type="email"
          className="input contact-input w-input"
          max="256"
          name="email"
          onChange={this.handleChange}
         // data-name="email"
          placeholder="Email address"
          //id="email"
          required=""
        />
        <label className="contact-form-label">
          Message:
        </label>
        <textarea
         // id="message"
          name="message"
          max="5000"
         // data-name="message"
          onChange={this.handleChange}
          required=""
          placeholder="Send me a message."
          className="input contact-input text-field w-input"
        />
        <button
          type="submit"
         // value="Send Message"
          //data-wait="Please wait..."
          className="form-button"
        >
          Send Message
        </button>
      </form>
    )
  }
}
export default ContactForm
