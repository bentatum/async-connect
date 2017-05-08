
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
const reducer = (action, state) => state

export default props =>
  <Provider store={createStore(reducer, props.initialState)}>
    {props.children}
  </Provider>
