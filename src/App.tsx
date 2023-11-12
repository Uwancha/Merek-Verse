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
import SkillDetailsPage from "./pages/SkillDetailsPage.js";
import { Blog } from "./blog/Blog.js";

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Routes >
          <Route path="/" Component={Home} />
          <Route path="/skills" Component={Skills} />
          <Route path="/about" Component={About} />
          <Route path="/blog" Component={Blog} />
          <Route path="*" Component={NotFound} />
          <Route path="/skills/category/:category/skill/:skillId" Component={SkillDetailsPage} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
