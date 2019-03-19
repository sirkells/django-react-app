import React, { Component } from "react";
import axios from "axios";
import Articles from "../components/Articles";
import FormLayout from "../components/Form";

class ArticlesList extends Component {
  state = { articles: [] };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/").then(res => {
      this.setState({
        articles: res.data
      });
      console.log(res.data);
    });
  }
  render() {
    return (
      <div>
        <Articles data={this.state.articles} />
        <br />
        <h1>Create Post</h1>
        <FormLayout requestType="post" btnType="Create" />
      </div>
    );
  }
}

export default ArticlesList;
