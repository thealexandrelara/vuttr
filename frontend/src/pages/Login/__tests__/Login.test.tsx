import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'


import TestProvider from '../../../tests/Providers/TestProvider'

import { Login } from '../Login'

const setup = (props = {}) => {
  const requiredProps = {
    ...props,
  }
  return render(
    <TestProvider>
      <Login {...requiredProps} />
    </TestProvider>,
  )
}

describe('Login component', () => {
  beforeAll(() => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    document.getElementsByTagName('head')[0].appendChild(script)

    const div = document.createElement('div')

    ReactDOM.render(
      <TestProvider>
        <Login />
      </TestProvider>, div,
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should render without crashing', () => {
    const component = () => setup()
    expect(component).not.toThrow()
  })
})
