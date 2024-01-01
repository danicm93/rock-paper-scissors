import { Suspense, lazy } from 'react'

import { ThemeProvider } from '@emotion/react'
import { CssBaseline, Typography } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import { Provider } from 'react-redux'
import { Route, Routes , BrowserRouter } from 'react-router-dom'

import { Layout } from '@/shared/components'
import store from '@/shared/redux/store'
import { SnackbarConfigurator } from '@/shared/utilities'

import { theme } from '.'

const Home = lazy(() => import('@/pages/home/home.page'))
const Board = lazy(() => import('@/pages/board/board.page'))

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <SnackbarProvider>
          <SnackbarConfigurator />
          <Suspense fallback={<Typography variant='h3' sx={{ color: 'red'}}>LOADING PAGE</Typography>}>
            <Provider store={store}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={ <Home /> } />
                  <Route path="board" element={ <Board /> } />
                </Routes>
              </BrowserRouter>
            </Provider>
          </Suspense>
        </SnackbarProvider>
      </Layout>
    </ThemeProvider>
  )
}

export default App
