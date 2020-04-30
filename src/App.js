import React, { useEffect, useState } from "react";
import { Link, Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Nav from "./Nav";
import Feed from "./Feed";
import PostStatusUpdate from "./PostStatusUpdate";
import VideoMap from "./VideoMap";

import authApi from "./api/authApi";

const App = (props) => {
  const [user, setUser] = useState({ name: "" });
  useEffect(() => {
    async function getLoggedInUser() {
      const user = await authApi.getLoggedInUser();
      setUser(user);
    }
    getLoggedInUser();
  }, []);
  return (
    <Router>
      <div className="container main">
        <Nav user={user}></Nav>
        <Switch>
          <Route path="/" exact>
            <Feed />
          </Route>
          <Route path="/post" component={PostStatusUpdate}></Route>
          <Route path="/map" component={VideoMap}></Route>
        </Switch>
      </div>
      <footer id="footer" className="has-background-primary has-text-centered">
        <div className="container is-aligned-center">
          <Link className="button is-medium is-primary" to="/map">
            <span>
              <i className="fa fa-map"></i> Map
            </span>
          </Link>
        </div>
      </footer>
    </Router>
  );
};

export default App;
