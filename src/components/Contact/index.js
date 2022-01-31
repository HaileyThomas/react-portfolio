import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";
import { mdiEmail } from "@mdi/js";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <section className="column is-four-fifths is-offset-1">
      <div>
        <h1 className="has-text-white is-size-3">
          <b>Contact Me 🦋</b>
        </h1>
        <p className="has-text-white has-text-centered">
          <a href="mailto:haileyraebeauty@gmail.com">
            <span className="icon has-text-success is-large is-size-1">
              <Icon path={mdiEmail} />
            </span>
          </a>
          <a href="https://github.com/HaileyThomas" target="blank">
            <span className="icon has-text-success is-large is-size-1">
              <Icon path={mdiGithub} />
            </span>
          </a>
        </p>
        <br />
        <p className="has-text-white is-size-4 has-text-centered">
          Please feel free to contact me by Email, GitHub or the form below!
        </p>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="field">
            <label className="label has-text-white" htmlFor="name">
              Name:
            </label>
            <input
              className="input is-success"
              type="text"
              defaultValue={name}
              onBlur={handleChange}
              name="name"
            />
          </div>
          <div className="field">
            <label className="label has-text-white" htmlFor="email">
              Email:
            </label>
            <input
              className="input is-success"
              type="email"
              defaultValue={email}
              onBlur={handleChange}
              name="email"
            />
          </div>
          <div className="field">
            <label className="label has-text-white" htmlFor="message">
              Message:
            </label>
            <textarea
              className="textarea is-success"
              name="message"
              defaultValue={message}
              onBlur={handleChange}
              rows="5"
            />
          </div>
          {errorMessage && (
            <div>
              <p className="has-text-red error-text">{errorMessage}</p>
            </div>
          )}
          <button
            className="button is-link is-success is-fullwidth"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
