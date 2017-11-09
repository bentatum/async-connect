
export default (depsMapper, props = {}) => {
  if (!props.store) {
    throw new Error('async-connect requires a redux store')
  }

  const state = props.store.getState()
  const deps = typeof depsMapper === 'function' ? depsMapper(props) : depsMapper

  if (!Array.isArray(deps)) {
    throw new Error('async-connect requires an array of actions.')
  }

  if (!state.async || !state.async.statuses) {
    throw new Error('async-connect requires an async reducer.')
  }

  deps.forEach(dep => {
    if (!state.async.statuses[dep.type]) {
      props.store.dispatch(dep.action(dep.payload))
    }
  })
}
