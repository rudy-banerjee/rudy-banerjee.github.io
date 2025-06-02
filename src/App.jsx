import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import MenuBar from './components/MenuBar.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Blogs from './pages/Blogs.jsx'
import BlogPostPage from './pages/BlogPostPage.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Rudy's Blog</h1>
        </header>
        <MenuBar />
        <main>
          <Routes>
            <Route path="/about" element={<AboutMe />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:filename" element={<BlogPostPage />} />
            <Route path="/" element={<Navigate to="/blogs" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App 