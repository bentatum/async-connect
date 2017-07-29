
import React from 'react'
import PropTypes from 'prop-types'
import { getDeps } from './lib'

export default depsMapper => Component => {
  class AsyncConnect extends React.PureComponent {
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
    store: PropTypes.object.isRequired
  }

  return AsyncConnect
}
