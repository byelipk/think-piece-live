import React, { Component } from "react";

import Authentication from "./Authentication";
import Posts from "./Posts";
import UserProfile from "./UserProfile";
import PostPage from "./PostPage";

import { Switch, Route, Link } from "react-router-dom";

class Application extends Component {
  render() {
    return (
      <main className="Application">
        <h1><Link to="/">Think Piece</Link></h1>
        <Authentication />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/posts/:id" component={PostPage} />
        </Switch>
      </main>
    );
  }
}

export default Application;
