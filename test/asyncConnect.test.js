
import React from 'react'
import renderer from 'react-test-renderer'
import asyncConnect from '../src/asyncConnect'
import TestProvider from './TestProvider'

describe('asyncConnect', () => {
  test('defaults without store in context', () => {
    const Component = asyncConnect()('div')
    expect(() => renderer.create(<Component />)).toThrow('async-connect requires a redux store')
  })
})
