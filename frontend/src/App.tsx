import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { ConnectedRouter } from 'connected-react-router'

import Routes from './routes'
import store from './store'
import GlobalStyles from './styles/global'
import { theme, Theme } from './styles/theme'

import history from './routes/history'

const App : React.FC = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>

    </ConnectedRouter>
  </Provider>
)

export default App
