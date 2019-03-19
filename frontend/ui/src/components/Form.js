import React, { Component } from "react";

import { Form, Input, Button } from "antd";
import axios from "axios";

class FormLayout extends Component {
  submitForm = (event, requestType, articleID) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;

    // eslint-disable-next-line default-case
    switch (requestType) {
      case "post":
        return axios
          .post("http://127.0.0.1:8000/api/create/", {
            title: title,
            content: content
          })
          .then(res => {
            alert(res.statusText);
            console.log(res);
          })
          .catch(err => console.log(err));

      case "put":
        return axios
          .put(`http://127.0.0.1:8000/api/${articleID}/update/`, {
            title: title,
            content: content
          })
          .then(res => {
            console.log(res);
            alert(res.statusText);
          })
          .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Form
          onSubmit={event =>
            this.submitForm(event, this.props.requestType, this.props.articleID)
          }
        >
          <Form.Item label="Title">
            <Input name="title" placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="Content">
            <Input name="content" placeholder="input placeholder" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {this.props.btnType}
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default FormLayout;
