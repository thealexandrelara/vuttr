import React from 'react'
import { render } from '@testing-library/react'
import { Formik } from 'formik'


import TestProvider from '../../../tests/Providers/TestProvider'

import { TextAreaInput } from '../TextAreaInput'
import { Props } from '../types'

interface OptionalProps {
  name?: string,
  label?: string,
  error?: boolean,
  errorMessage?: string,
  FormikProps?: {},
}

const setup = (props: OptionalProps = {}) => {
  const { FormikProps = {}, ...otherProps } = props
  const requiredProps: Props = {
    name: 'test',
    ...otherProps,
  }
  const formikProps = {
    initialValues: { name: props.name || 'test' },
    onSubmit: () => {},
    ...FormikProps,
  }
  return render(
    <TestProvider>
      <Formik {...formikProps}>
        <TextAreaInput {...requiredProps} />
      </Formik>
    </TestProvider>,
  )
}

describe('TextAreaInput component', () => {
  it('should render without crashing', () => {
    const component = () => setup()
    expect(component).not.toThrow()
  })

  it('should render input', async () => {
    const testid = 'text-area-input'
    const { findByTestId } = setup()

    const input = await findByTestId(testid)
    expect(input).toBeTruthy()
  })

  it('should render label if it is passed by props', async () => {
    const testid = 'text-area-label'
    const { findByTestId } = setup({ label: 'My label' })

    const label = await findByTestId(testid)
    expect(label).toBeTruthy()
  })
})
