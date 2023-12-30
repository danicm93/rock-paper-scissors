import { Suspense, lazy } from 'react'

import { ThemeProvider } from '@emotion/react'
import { CssBaseline, Typography } from '@mui/material'
import { Provider } from 'react-redux'
import { Route, Routes , BrowserRouter } from 'react-router-dom'

import { Layout } from '@/shared/components'
import store from '@/shared/redux/store'

import { theme } from '.'

const Home = lazy(() => import('@/pages/home/home.page'))

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Suspense fallback={<Typography variant='h3' sx={{ color: 'red'}}>LOADING PAGE</Typography>}>
          <Provider store={store}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={ <Home /> } />
                {/* <Route path="contact" element={ <Contact /> } /> */}
              </Routes>
            </BrowserRouter>
          </Provider>
        </Suspense>
      </Layout>
    </ThemeProvider>
  )
}

export default App
