import React from 'react'
import { render } from '@testing-library/react'


import TestProvider from '../../../tests/Providers/TestProvider'

import { Home } from '../Home'

const setup = (props = {}) => {
  const requiredProps = {
    ...props,
  }
  return render(
    <TestProvider>
      <Home {...requiredProps} />
    </TestProvider>,
  )
}

describe('Home component', () => {
  it('should render without crashing', () => {
    const component = () => setup()
    expect(component).not.toThrow()
  })

  it('should render app title', async () => {
    const testid = 'app-title'
    const { findByTestId } = setup()

    const input = await findByTestId(testid)
    expect(input).toBeTruthy()
  })
})
