import React from "react"
import { Routes, Route } from "react-router-dom"
import ScrollPage from "./ScrollPage"

const App = () => {

  return (
    <Routes>
      <Route path="/scroll" element={<ScrollPage />} />
    </Routes>
  )
}


export default App