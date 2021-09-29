import "./App.css";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
const Contact = () => {
  const [state, handleSubmit] = useForm("xzbkbdrw");
  if (state.succeeded) {
    return <p>Thanks for contacting me!</p>;
  }
  return (
    <div id="contact-wrap">
      <link rel="stylesheet" type="text/css" href="/css/queries.css" />
      <form onSubmit={handleSubmit}>
        <label id="contact_header" htmlFor="email">
          CONTACT ME
        </label>
        <input id="name" type="text" name="Name" placeholder="Your Name" />
        <ValidationError
          prefix="message"
          field="message"
          errors={state.errors}
        />
        <input id="email" type="email" name="email" placeholder="Your Email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="message" name="message" placeholder="Your Message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <input
          id="submit_button"
          type="submit"
          value="Send it!"
          disabled={state.submitting}
        />
        <input
          id="reset_button"
          type="reset"
          value="Reset it!"
          disabled={state.resetting}
        />
      </form>
    </div>
  );
};
export default Contact;
