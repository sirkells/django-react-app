import React from "react";
import { Route } from "react-router-dom";
import ArticlesList from "./containers/ArticlesList";
import ArticleDetail from "./containers/ArticleDetail";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={ArticlesList} />
    <Route path="/:articleID" component={ArticleDetail} />
  </div>
);

export default BaseRouter;
