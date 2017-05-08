
import React from 'react'
import renderer from 'react-test-renderer'
import asyncConnect from '../lib/asyncConnect'
import TestProvider from './TestProvider'

describe('asyncConnect', () => {
  test('defaults without store in context', () => {
    const Component = asyncConnect()('div')
    expect(() => renderer.create(<Component />)).toThrow('asyncConnect requires a redux store')
  })

  // test('doesnt break', () => {
  //   const TestComponent = asyncConnect(testMapping)('div')

  //   function testMapping (props) {
  //     console.log(props)
  //     return null
  //   }

  //   const Testing = () =>
  //     <TestProvider>
  //       <div>
  //         <TestComponent />
  //       </div>
  //     </TestProvider>

  //   // const ComponentWithContext = () =>
  //   //   <Testing />

  //   // // const Test = (TestComponent)

  //   const component = renderer.create(
  //     <Testing />
  //   )
  //   // // console.log(component)
  //   // // expect(component).toBeTruthy()


  // })
})
