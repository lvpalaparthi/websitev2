import "./App.css";
import "./main.js";
import React from "react";
// import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  return (
    <div id="content-wrap">
      <h2 id="contact_header">CONTACT ME</h2>
      <div id="section-form" class="section-form">
        <form
          method="POST"
          action="https://formspree.io/xzbkbdrw"
          id="my-form"
          class="contact-form"
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            required
          />
          <textarea
            name="message"
            id="message"
            placeholder="Your message"
          ></textarea>

          <input
            id="submit_button"
            type="submit"
            name="submit"
            value="Send it!"
          />
          <input
            id="reset_button"
            type="reset"
            name="reset_button"
            value="Reset it!"
          />
        </form>
      </div>
      <div id="status"></div>
      {/* <div class="overlay hidden"></div> */}
    </div>
  );
}

export default Contact;
