import React from "react";
import { Route } from "react-router-dom";
import ArticlesList from "./containers/ArticlesList";
import ArticleDetail from "./containers/ArticleDetail";
import { LoginForm } from "./components/Login";
const BaseRouter = () => (
  <div>
    <Route exact path="/" component={ArticlesList} />
    <Route path="/login" component={LoginForm} />
    <Route path="/articles/:articleID" component={ArticleDetail} />
  </div>
);

export default BaseRouter;
