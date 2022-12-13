import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Box} from '@mui/material'; // div w shading and color
import ExerciseDetails from './pages/ExerciseDetails';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css'


function App() {
  return (
    <Box width='400px' sx={{ width: { x1: '1488px'}}} m='auto'> {/*making sure its responsive on larger screens, m = margin*/}
        <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetails />} />
    </Routes>
        <Footer />
    </Box>
  )
}

export default App