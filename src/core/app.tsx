import { Route, Routes } from 'react-router-dom'

import { Home } from '@/pages'
import { Layout } from '@/shared/components'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={ <Home /> } />
        {/* <Route path="contact" element={ <Contact /> } /> */}
      </Routes>
    </Layout>
  )
}

export default App
