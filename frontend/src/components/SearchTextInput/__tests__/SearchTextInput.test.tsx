import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import TestProvider from '../../../tests/Providers/TestProvider'

import { SearchTextInput } from '../SearchTextInput'
import { Props } from '../types'


const setup = (props = {}) => {
  const requiredProps: Props = {
    onChange: () => {},
    ...props,
  }
  return render(
    <TestProvider>
      <SearchTextInput {...requiredProps} />
    </TestProvider>,
  )
}

describe('SearchTextInput component', () => {
  it('should render without crashing', () => {
    const component = () => setup()
    expect(component).not.toThrow()
  })

  it('should render input', async () => {
    const testid = 'seach-text-input'
    const { findByTestId } = setup()

    const input = await findByTestId(testid)
    expect(input).toBeTruthy()
  })

  it('should render label if it is passed by props', async () => {
    const testid = 'seach-text-input-label'
    const { findByTestId } = setup({ label: 'My label' })

    const label = await findByTestId(testid)
    expect(label).toBeTruthy()
  })

  it('should render error label if error is passed by props', async () => {
    const testid = 'seach-text-input-error-label'
    const { findByTestId } = setup({ error: 'Error' })

    const errorLabel = await findByTestId(testid)
    expect(errorLabel).toBeTruthy()
  })

  it('should call onChange when input is changed', async () => {
    const onChange = jest.fn()
    const { findByTestId } = setup({ onChange })

    const input = await findByTestId('seach-text-input')

    fireEvent.change(input, { target: { value: 'my new value' } })

    expect(onChange).toHaveBeenCalled()
  })
})
