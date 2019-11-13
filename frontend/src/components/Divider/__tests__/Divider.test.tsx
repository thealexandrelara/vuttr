import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import TestProvider from '../../../tests/Providers/TestProvider'

import { Divider } from '../Divider'
import { Props } from '../types'


const setup = (props = {}) => {
  const requiredProps: Props = {
    text: '',
    ...props,
  }
  return render(
    <TestProvider>
      <Divider {...requiredProps} />
    </TestProvider>,
  )
}

describe('Divider component', () => {
  it('should render without crashing', () => {
    const component = () => setup()
    expect(component).not.toThrow()
  })

  it('should render correct text as children', async () => {
    const text = 'My Text'
    const { findByText } = setup({ text })

    const divider = await findByText(text)
    expect(divider).toBeTruthy()
  })
})
