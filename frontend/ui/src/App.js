import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./containers/Layout";
import BaseRouter from "./routes";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import * as actions from "./store/actions/auth";
class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignUp();
  }
  render() {
    return (
      <div>
        <Router>
          <Layout {...this.props}>
            <BaseRouter />
          </Layout>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.autoCheckState())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
