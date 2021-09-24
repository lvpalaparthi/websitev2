import "./App.css";
import Nav from "./Nav";
import Portfolio from "./Portfolio";
import Dance from "./Dance";
import Contact from "./Contact";
import Footer from "./Footer";
import Icons from "./Icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Icons />
      <div class="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/dance" component={Dance} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

const Home = () => (
  <div>
    <link rel="stylesheet" type="text/css" href="/css/style.css" />
    <link rel="stylesheet" type="text/css" href="/css/queries.css" />
    <body>
      <header>
        <div class="background-cover-box">
          <h1 id="my_name">Lakshmi Palaparthi</h1>
          <h3 id="description">Engineer.Choreographer.</h3>
        </div>
      </header>

      <section class="section-about-me">
        <div class="row">
          <div class="me-post">
            <img id="me-img" src="/images/about_me.jpg" alt="profile" />
            <p id="section-about-me">
              Welcome! My name is Lakshmi Palaparthi, I am a software engineer
              and an emerging choreographer currently based in the Philadelphia,
              PA area. Be sure to click on the sidebar tabs to get a glimpse
              into my story and check for any updates.
            </p>
            <a target="_blank" href="/resume/Lakshmi_Palaparthi_Resume.pdf">
              <input id="resume-btn" type="button" value="View Resume" />
            </a>
          </div>
        </div>
      </section>
    </body>
  </div>
);

export default App;
