import React, { Component } from "react";
import styled from "styled-components";
import Label from "components/Label";

const Input = styled("input")`
  padding: 12px 16px;
  font-size: 1rem;
  line-height: 1.5;

  border-radius: 2px;
  border: 0;
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primaryLight};
`;

class BookmarkForm extends Component {
  state = {
    url: "",
    title: ""
  };

  onSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { url, title } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <Label>
          Url
          <Input
            onChange={this.handleChange}
            value={url}
            type="text"
            name="url"
          />
        </Label>
        <Label>
          Title
          <Input
            onChange={this.handleChange}
            value={title}
            type="text"
            name="title"
          />
        </Label>
        <input type="submit" value="Add bookmark" />
      </form>
    );
  }
}

export default BookmarkForm;
