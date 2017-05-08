
export default (depsMapper, props = {}) => {
  if (!props.store) {
    throw new Error('asyncConnect requires a redux store')
  }

  const state = props.store.getState()
  const deps = typeof depsMapper === 'function' ? depsMapper(props) : depsMapper

  if (!Array.isArray(deps)) {
    throw new Error('asyncConnect requires an array of dependencies passed to it. See docs.')
  }

  deps.forEach(({ key, promise, payload }) => {
    if (!state.async.statuses[key]) {
      props.store.dispatch(promise(payload))
    }
  })
}
