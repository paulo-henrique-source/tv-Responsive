import React from 'react'
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#26ACA9',
      light: 'rgba(38, 172, 169, 0.2)',
      dark: '#219A97',
    },
    secondary: {
      main: '#F9BE73',
      light: 'rgba(244, 226, 204, 1)',
    },
    grey: {
      main: '#F5F5F5',
      dark: '#EBEBEB',
    },
    black: {
      main: '#505050',
      light: '#5F6368',
    },
    background: {
      main: '#FFFFFF',
    },
  },
})

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
