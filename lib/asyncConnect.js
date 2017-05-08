
import React from 'react'
import PropTypes from 'prop-types'
import { getDeps } from './helpers'

export default depsMapper => Component => {
  class AsyncConnect extends React.PureComponent {
    componentDidMount () {
      const props = {
        ...this.props,
        ...this.context
      }
      getDeps(depsMapper, props)
    }

    componentWillReceiveProps (next) {
      const props = {
        ...next,
        ...this.context
      }
      getDeps(depsMapper, props)
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
