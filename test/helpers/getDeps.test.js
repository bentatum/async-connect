
import { getDeps } from '../../lib/helpers'

describe('helpers/getDeps', () => {

  test('default', () => {
    expect(function () { getDeps() }).toThrow('asyncConnect requires a redux store')
  })

  test('no deps', () => {
    const props = {
      store: {
        getState: () => null
      }
    }
    const store = {  }
    expect(function () { getDeps(null, props) }).toThrow('asyncConnect requires an array of dependencies passed to it. See docs.')
  })

  test('with deps', () => {
    const store = {
      dispatch: () => {},
      getState: () => ({
        async: {
          statuses: []
        }
      })
    }
    const deps = [
      {
        key: '@@my-app/custom/actionType',
        promise: () => {}
      }
    ]
    expect(getDeps(deps, { store })).toBeUndefined()
  })
})