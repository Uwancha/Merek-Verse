import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";


import './App.css'
import Footer from './components/Footer'
import Nav from './components/Header'
import Home from './pages/Home'

function App() {

  return (
    <Router>

      <Nav />

      <Routes >
        <Route path="/" Component={Home} />
      </Routes>
      
      <Footer />

    </Router>
  )
}

export default App
