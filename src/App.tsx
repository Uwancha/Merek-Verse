import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";


import './App.css'
import Footer from './components/Footer'
import Nav from './components/Header'
import Home from './pages/Home'
import Skills from "./pages/Skills";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <Router>

      <Nav />

      <Routes >
        <Route path="/" Component={Home} />
        <Route path="/skills" Component={Skills} />
        <Route path="*" Component={NotFound} />
      </Routes>
      
      <Footer />

    </Router>
  )
}

export default App
