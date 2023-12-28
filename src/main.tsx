import React from 'react'

import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { App, theme } from '@/core'
import { Layout } from '@/shared'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <App />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
