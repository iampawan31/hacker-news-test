import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, StoryDetail } from './views'

const App = () => {
  return (
    <div className="bg-gray h-full min-h-screen text-black">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":objectID" element={<StoryDetail />} />
      </Routes>
    </div>
  )
}

export default App
