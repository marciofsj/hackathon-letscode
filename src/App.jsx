import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
localStorage.setItem('teachersAccount', JSON.stringify([]))
localStorage.setItem('studentsAccount', JSON.stringify([]))

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
