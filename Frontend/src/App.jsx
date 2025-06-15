import React from 'react'
import Home from '../src/Home/Home'
import {Route,Routes} from 'react-router-dom'
import Courses from './courses/Courses'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Signup from './components/Signup';





function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
