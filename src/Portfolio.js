import "./App.css";
import React from "react";
import Collapsible from "react-collapsible";
import "./Collapsible.scss";

function Portfolio() {
  return (
    <div id="content-wrap">
      <link rel="stylesheet" type="text/css" href="/css/queries.css" />
      <h1>PROJECTS</h1>
      <p class="welcome-note">
        Welcome to my projects page! These are a collection of projects I have
        been working on over the past few years. Don't forget to check back
        often for updates. <br />
        Check out some of my work on{" "}
        <a
          rel="noreferrer"
          href="https://github.com/lvpalaparthi"
          target="_blank"
        >
          Github
        </a>
        !
      </p>
      <hr />
      <div id="collapsible-content">
        <Collapsible trigger="Encryption in Persistent Memory Survey">
          <p class="project-description">
            This report surverys some of the efficient practices to encrypt
            persistent memory. Each approach explains the implementation with
            desired results proving to be a better solution in certain scenarios
            than others. I propose that encrypting persistent memory leads to
            higher endurance/ better performance through various
            implementations.
            <b>(CPEG853) </b>
          </p>
          <a
            id="portfolio-btn"
            class="btn"
            type="submit"
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/11GCsDVCtRQqFjkZXiVIUhrf8kO753zH0/view?usp=sharing"
          >
            Read Survey
          </a>
        </Collapsible>
        <Collapsible trigger="Augmented Reality Navigation App">
          <p class="project-description">
            Our Navigation Android App focuses on using augmented reality to
            calculate the closest blue light on campus with respect to the
            user's location. Feaures like geolocation, acclerometer, and compass
            are displayed based on the user's location and saved to Firebase's
            realtime database. The navigation feature using Mapbox guides the
            user with a series of arrows and checkpoints to the location.
            <b>(Java, Firebase, ARCore, Mapbox)</b>
          </p>
          <a
            id="portfolio-btn"
            class="btn"
            type="submit"
            target="_blank"
            rel="noopener noreferrer"
            href="https://youtu.be/ivO4ICOVd-k"
          >
            View Demo
          </a>
          <a
            id="portfolio-btn"
            class="btn"
            type="submit"
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1KgdplYJYk_KEs-aQ46LvXhP9xNtxHnGr/view?usp=sharing"
          >
            Read More
          </a>
        </Collapsible>
      </div>
    </div>
  );
}

export default Portfolio;
