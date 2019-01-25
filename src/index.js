import React from "react";
import { render } from "react-dom";

import "./index.scss";

import Application from "./components/Application";
import PostsProvider from "./providers/PostsProvider";
import CurrentUserProvider from "./providers/CurrentUserProvider";

import { BrowserRouter as Router } from "react-router-dom";

render(
  <Router>
    <CurrentUserProvider>
      <PostsProvider>
        <Application />
      </PostsProvider>
    </CurrentUserProvider>
  </Router>,
  document.getElementById("root")
);
