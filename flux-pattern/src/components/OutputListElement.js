import React, { Component } from 'react'

export default class OutputListElement extends Component {

  render() {
    return (
      <li>
        {this.props.id} : {this.props.text}
        <br />
        <input type='text' ref='input' />
        <button onClick={() => this.handleUpdateClick()}>Update</button>
        <button onClick={() => this.handleDeleteClick()}>Delete</button>
      </li>
    )
  }

  handleUpdateClick() {
    this.props.onUpdateClick(this.props.id, this.refs.input.value.trim());
    this.props.updateCallback();
    this.refs.input.value = '';
  }

  handleDeleteClick() {
    this.props.onDeleteClick(this.props.id);
    this.props.updateCallback();
  }
}
