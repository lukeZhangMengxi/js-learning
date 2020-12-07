import React, { Component, PropTypes } from 'react'

export default class OutputListElement extends Component {

  render() {
    return (
      <li>
        {this.props.uuid} : {this.props.text} <button onClick={() => {
          this.props.deleteCallback(this.props.uuid);
        }}>Delete</button>
      </li>
    )
  }
}
