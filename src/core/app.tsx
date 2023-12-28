import { Route, Routes } from 'react-router-dom'

import { Home } from '@/pages'



function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      {/* <Route path="contact" element={ <Contact /> } /> */}
    </Routes>
  )
}

export default App
