# async-conncect

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/async-conncect.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/async-conncect
[travis-image]: https://img.shields.io/travis/bentatum/async-conncect.svg?style=flat-square
[travis-url]: https://travis-ci.org/bentatum/async-conncect
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## Install

```
yarn add async-conncect 
```

## Usage

```js
import { compose } from 'recompact'
import asyncConnect from 'async-conncect'
import { connect } from 'react-redux'

const enhance = compose(
  // this will call getUser and getOtherThing on componentDidMount as long as it's corresponding status isnt pending, success or failure.
  asyncConnect([
    {
      type: '@@my-app/getUser',
      action: getUser,
      payload: {
        id: 123
      }
    },
    {
      type: '@@my-app/getOtherThing',
      action: getOtherThing,
      payload: {
        id: 456
      }
    }
  ]),
  // you'll need to map the response of your action, thunk, saga (er, whatever) in your app's state reducer.
  connect(({ user }) => ({ user }))
)

export default enhance(props => props.user.name

```

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[ISC](LICENSE.md)
