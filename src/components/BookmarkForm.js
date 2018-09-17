import React, { Component } from "react";
import Label from 'components/Label';
import Input from 'components/Input';

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
            placeholder="https:// ..."
          />
        </Label>
        <Label>
          Title
          <Input
            onChange={this.handleChange}
            value={title}
            type="text"
            name="title"
            placeholder="My Cool Website"
          />
        </Label>
        <input type="submit" value="Add bookmark" />
      </form>
    );
  }
}

export default BookmarkForm;
