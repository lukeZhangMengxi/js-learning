import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addAction } from './actions/Actions.js'

import InputUI from './components/InputUI.js'
import OutputList from './components/OutputList.js'

class App extends Component {
  render() {
    const { dispatch, randomName } = this.props

    return (
      <div>
        <InputUI onAddClick={text => dispatch(addAction(text))} />
        <OutputList elementList={randomName} />
      </div>
    )
  }
}

// This will be called every time when the Redux store state changes
// state: the entire Redux store state
// return:
//    return a plain object that contains the data the component needs
//    - Each field in the object will become a prop for your actual component
//    - The values in the fields will be used to determine if your component needs to re-render
function mapStateToProps(state) {
  return {
    randomName: state.aList
  }
}

// connects a React component to a Redux store
export default connect(mapStateToProps)(App);
