import React, { Component, PropTypes } from 'react'

export default class OutputListElement extends Component {
  render() {
    return (
      <li>
        {this.props.id} : {this.props.text}
      </li>
    )
  }
}
