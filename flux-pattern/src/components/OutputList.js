import React, { Component, PropTypes } from 'react'
import OutputListElement from './OutputListElement.js'

export default class OutputList extends Component {

  deleteElement(uuid) {
    console.log("Deleting uuid of " + uuid);
    let removeIndex = this.props.elementList.map(item => item.uuid).indexOf(uuid);
    this.props.elementList.splice(removeIndex, 1);
    this.forceUpdate();
  }

  render() {
    return (
      <ul>
        {this.props.elementList.map(element =>
          <OutputListElement
            deleteCallback={this.deleteElement.bind(this)}
            key={element.id}
            {...element}
          />
        )}
      </ul>
    )
  }
}
