import React, { Component, PropTypes } from 'react'

export default class OutputListElement extends Component {

  render() {
    return (
      <li>
        {this.props.id} : {this.props.text}
        <button onClick={() => this.handleDeleteClick()}>Delete</button>
      </li>
    )
  }

  handleDeleteClick() {
    this.props.onDeleteClick(this.props.id);
    this.props.updateCallback();
  }
}
