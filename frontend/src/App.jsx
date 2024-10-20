import * as React from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import Cover from './components/Cover'
import Home from './components/Home'
import WriteLog from './components/WriteLog'
import EditLog from './components/EditLog'
import './App.css'

function App() {



  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/home" element={<Home />} />
          <Route path="/write" element={<WriteLog />} />
          <Route path="/edit/:id" element={<EditLog />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
