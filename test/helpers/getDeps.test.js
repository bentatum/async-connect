
import { getDeps } from '../../src/lib'

describe('getDeps', () => {

  test('default', () => {
    expect(function () { getDeps() }).toThrow('async-connect requires a redux store')
  })

  test('no deps', () => {
    const props = {
      store: {
        getState: () => null
      }
    }
    const store = {  }
    expect(function () { getDeps(null, props) }).toThrow('async-connect requires an array of actions.')
  })

  test('no async in store', () => {
    const type = '@@my-app/custom/actionType'
    const store = {
      dispatch: () => {},
      getState: () => ({})
    }
    const deps = [
      {
        type: '@@my-app/custom/actionType',
        action: () => {}
      }
    ]
    const props = { store }
    expect(function () { getDeps(deps, props) }).toThrow('async-connect requires an async reducer.')
  })

  test('with deps', () => {
    const type = '@@my-app/custom/actionType'
    const store = {
      dispatch: () => {},
      getState: () => ({
        async: {
          statuses: {
            [type]: 'pending'
          }
        }
      })
    }
    const deps = [
      {
        type,
        action: () => {}
      }
    ]
    expect(getDeps(deps, { store })).toBeUndefined()
  })
})
