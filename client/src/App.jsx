import { React } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import { Homepage } from './pages/Homepage'
import { Createbook } from './pages/Createbook'
import { Showbook } from './pages/Showbook'
import { Updatebook } from './pages/Updatebook'
import { Deletebook } from './pages/Deletebook'

function App() {

  return (
      <div>
      <Router>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/books/create' element={<Createbook />}/>
        <Route path='/books/details/:id' element={<Showbook />}/>
        <Route path='/books/update' element={<Updatebook />}/>
        <Route path='/books/delete' element={<Deletebook />}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
