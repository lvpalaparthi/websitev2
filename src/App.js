import "./App.css";
import Nav from "./Nav";
import Portfolio from "./Portfolio";
import Dance from "./Dance";
import Contact from "./Contact";
import Experience from "./Experience";
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
          <Route path="/experience" exact component={Experience} />
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
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" type="text/css" href="/css/normalize.css" />
      <link rel="stylesheet" type="text/css" href="/css/queries.css" />
      <link rel="stylesheet" type="text/css" href="/css/style.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;1,300&display=swap"
        rel="stylesheet"
        async
      />
      <title>Lakshmi Palaparthi</title>
    </head>
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
          </div>
        </div>
      </section>

      <script src="/src/main.js"></script>
    </body>
  </div>
);

export default App;
