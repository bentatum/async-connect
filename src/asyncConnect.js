
import React from 'react'
import { object } from 'prop-types'
import { getDeps } from './lib'

export default depsMapper => Component => {
  class AsyncConnect extends React.Component {
    componentDidMount () {
      this._getDeps(this.props)
    }

    componentWillReceiveProps (next) {
      this._getDeps(next)
    }

    _getDeps (props) {
      getDeps(depsMapper, { ...props, ...this.context })
    }

    render () {
      return (
        <Component {...this.props} />
      )
    }
  }

  AsyncConnect.contextTypes = {
    store: object.isRequired
  }

  return AsyncConnect
}
