import "./App.css";
import Nav from "./Nav";
import Portfolio from "./Portfolio";
import Dance from "./Dance";
import Contact from "./Contact";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Nav />
      <div class="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/dance" exact component={Dance} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

const Home = () => (
  <div>
    <link rel="stylesheet" type="text/css" href="/css/style.css" />
    <link rel="stylesheet" type="text/css" href="/css/queries.css" />
    <header>
      <div class="background-cover-box">
        <h1 id="my_name">
          Lakshmi Palaparthi
          <br /> Engineer.Choreographer.
        </h1>
      </div>
    </header>

    <section class="section-about-me">
      <div class="me-post">
        <img id="me-img" src="/images/about_me.jpg" alt="profile" />
        <p id="section-about-me">
          Welcome! My name is Lakshmi Palaparthi, I am a software engineer and
          an emerging choreographer currently based in the Philadelphia, PA
          area. Be sure to click on the sidebar tabs to get a glimpse into my
          story and check for any updates.
        </p>
        <a target="_blank" href="/resume/LPResume.pdf">
          <input id="resume-btn" type="button" value="View Resume" />
        </a>
      </div>
    </section>
  </div>
);

export default App;
