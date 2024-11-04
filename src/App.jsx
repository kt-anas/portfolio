 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import About from './pages/about'
import Works from './pages/works'
import Contact from './pages/contact'
import Layout from './components/layout'

function App() {

  return (
     <BrowserRouter>
       <Routes>
          <Route  path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route  path="/about" element={<About />} />
          <Route path='/works' element={<Works />} />
          <Route path='/contact' element={<Contact />} />
          </Route>
       </Routes>
     </BrowserRouter>
  )
}

export default App
