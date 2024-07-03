import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Home.tsx'
import Courses from './pages/Courses.tsx'
import Teachers from './pages/Teachers.tsx'
import Contact from './pages/Contact.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
