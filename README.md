# redux-await-connect

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/redux-await-connect.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/redux-await-connect
[travis-image]: https://img.shields.io/travis/bentatum/redux-await-connect.svg?style=flat-square
[travis-url]: https://travis-ci.org/bentatum/redux-await-connect
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## Install

```
yarn add redux-await-connect 
```

## Usage

```js
import awaitConnect from 'redux-await-connect'

const enhance = compose(
  awaitConnect([{
    key: 'getUser',
    promise() {
      return client.get('user', { id: 'xyz' })
    }
  }]),
  connect(({ user }) => ({ user }))
)

export default enhance(props =>
  <div>
    {props.user.name}
  </div>
)

```

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[ISC](LICENSE.md)
