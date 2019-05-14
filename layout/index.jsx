import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Pokemon from "../pages/pokemon";

export default () => (
  <div>
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path={`/pokemon/:id`} component={Pokemon} />
      </Switch>
    </main>
    <footer>Copyright &#9400;Dawlin 2019</footer>
  </div>
);
