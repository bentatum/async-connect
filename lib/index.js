
import React from 'react'
import { connect } from 'react-redux'

export default depsMapper => Component => props => {
  const promises = {}
  const statusMap = {}
  const deps = typeof depsMapper === 'function' ? depsMapper(props) : depsMapper
  
  deps.forEach(prop => {
    promises[prop.key] = prop.promise
    statusMap[prop.key] = null
  })

  @connect(
    ({ await: { statuses } }) => {
      Object.keys(statusMap).forEach(key => {
        statusMap[key] = statuses[key]
      })
      return { statusMap }
    },
    { ...promises }
  )

  class AwaitConnect extends React.Component {
    componentDidMount () {
      deps.forEach(({ key, data, params, headers }) => {
        const status = this.props.statusMap[key]
        if (!status) {
          this.props[key](data || params, headers)
        }
      })
    }

    render () {
      return (
        <Component
          {...this.props}
          {...props} />
      )
    }
  }

  return <AwaitConnect />
}
