import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import Routes from './routes'
import store from './store'
import GlobalStyles from './styles/global'
import { theme, Theme } from './styles/theme'


const App : React.FC = () => (
  <Provider store={store}>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </Provider>
)

export default App
