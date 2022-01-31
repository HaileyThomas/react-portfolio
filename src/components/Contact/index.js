import React from "react";

function Contact() {
    return (
  <section className="columns">
    <div className="column">
      <h1 className="has-text-white is-size-3"><b>Contact Me 🦋</b></h1>
      <p className="has-text-white is-size-4 has-text-centered">Please feel free to contact me by Email, GitHub or the form below!</p>
      <form id="contact-form">
        <div className="field">
          <label className="label has-text-white" htmlFor="name">
            Name:
          </label>
          <input className="input is-info" type="text" name="name" />
        </div>
        <div className="field">
          <label className="label has-text-white" htmlFor="email">
            Email:
          </label>
          <input className="input is-info" type="email" name="email" />
        </div>
        <div className="field">
          <label className="label has-text-white" htmlFor="message">
            Message:
          </label>
          <textarea className="textarea is-info" name="message" rows="5" />
        </div>
        <button className="button is-link is-fullwidth" type="submit">
          Submit
        </button>
      </form>
    </div>
  </section>
    )
}

export default Contact;
