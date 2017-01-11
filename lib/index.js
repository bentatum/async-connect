
import React from 'react'
import { forOwn } from 'lodash'
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
    ({
      await: { statuses }
    }) => {
      const statusList = []
      forOwn(statusMap, (val, key) => {
        const status = statuses[key]
        statusList.push(status)
        statusMap[key] = status
      })
      return {
        statusMap,
        statusList
      }
    },
    { ...promises }
  )

  class AsyncConnect extends React.Component {
    componentDidMount () {
      deps.forEach(({ key, data, params, headers }) => {
        const status = this.props.statusMap[key]
        if (!status) {
          console.log(this.props, key)
          this.props[key](data || params, headers)
        }
      })
    }

    render () {
      const { statusList, ...rest } = this.props
      if (statusList.indexOf('pending') > -1 ||
        statusList.indexOf(undefined) > -1) {
        console.log('loading')
      }
      console.log('success')
      return <Component {...rest} {...props} />
    }
  }

  return <AsyncConnect />
}
