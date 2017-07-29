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
import asyncConnect from 'async-conncect'

const enhance = compose(
  asyncConnect([{
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
