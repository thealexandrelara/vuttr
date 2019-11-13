import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import TestProvider from '../../../tests/Providers/TestProvider'

import { Button } from '../Button'
import { Props } from '../types'


const setup = (props = {}) => {
  const requiredProps: Props = {
    children: '',
    ...props,
  }
  return render(
    <TestProvider>
      <Button {...requiredProps} />
    </TestProvider>,
  )
}

describe('Button component', () => {
  it('should render without crashing', () => {
    const component = () => setup()
    expect(component).not.toThrow()
  })

  it('should render correct text as children', async () => {
    const children = <span data-testid="button-child-text">My button text</span>
    const { findByTestId } = setup({ children })

    const button = await findByTestId('button-child-text')
    expect(button).toBeTruthy()
  })

  it('should call onClick when button is clicked', async () => {
    const onClick = jest.fn()
    const { findByTestId } = setup({ onClick })

    const button = await findByTestId('button')
    fireEvent.click(button)

    expect(onClick).toHaveBeenCalled()
  })
})
