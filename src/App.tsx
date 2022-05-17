import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './views'

const App = () => {
  return (
    <div className="bg-off-white h-full min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
