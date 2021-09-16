import "./App.css";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xzbkbdrw");
  if (state.succeeded) {
    return <p>Thanks for contacting me!</p>;
  }
  return (
    <div id="content-wrap">
      <form onSubmit={handleSubmit}>
        <label id="contact_header" htmlFor="email">
          CONTACT ME
        </label>
        <input id="name" type="text" name="Name" />
        <ValidationError
          prefix="message"
          field="message"
          errors={state.errors}
        />
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button id="submit_button" type="submit" disabled={state.submitting}>
          Submit it!
        </button>
        <button id="reset_button" type="reset" disabled={state.resetting}>
          Reset it!
        </button>
      </form>
    </div>
  );
}
function Contact() {
  return <ContactForm />;
}
export default Contact;
