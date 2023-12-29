import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { Route, Routes , BrowserRouter } from 'react-router-dom'

import { Home } from '@/pages'
import { Layout } from '@/shared/components'

import { theme } from '.'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Routes>
            <Route path="/" element={ <Home /> } />
            {/* <Route path="contact" element={ <Contact /> } /> */}
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
