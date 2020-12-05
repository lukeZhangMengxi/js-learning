import React, { Component, PropTypes } from 'react'
import store from '../index.js'

export default class InputUI extends Component {
  render() {
    return (
      <div>
        <input type='text' ref='input' />

        <button onClick={(e) => this.handleClick(e)}>
          Add
        </button>
      </div>
    )
  }
  handleClick(e) {
    const node = this.refs.input
    const text = node.value.trim()
    this.props.onAddClick(text)
    console.log(store.getState())
    node.value = ''
  }
}
