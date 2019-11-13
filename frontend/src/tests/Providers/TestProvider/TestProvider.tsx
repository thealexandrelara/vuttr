import React, { FunctionComponent } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { ConnectedRouter } from 'connected-react-router'
import ReduxToastr from 'react-redux-toastr'
import ReactModal from 'react-modal'

import store from '../../../store'
import GlobalStyles from '../../../styles/global'
import { theme } from '../../../styles/theme'

import history from '../../../routes/history'


// ReactModal.setAppElement('#root')

const TestProvider: FunctionComponent = ({ children }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
      <GlobalStyles />
      <ThemeProvider theme={theme}><>{children}</></ThemeProvider>
    </ConnectedRouter>
  </Provider>
)

TestProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TestProvider
