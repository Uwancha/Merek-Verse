import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../src/store.js"

import './App.css'
import Footer from './components/Footer'
import Nav from './components/Header'
import Home from './pages/Home'
import Skills from "./pages/Skills";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Routes >
          <Route path="/" Component={Home} />
          <Route path="/skills" Component={Skills} />
          <Route path="/about" Component={About} />
          <Route path="*" Component={NotFound} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  )
}

export default App
