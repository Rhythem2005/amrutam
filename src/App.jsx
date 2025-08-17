import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Page1 from './pages/Page1'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Page1 />} />
      </Routes>
    </div>
  )
}

export default App