import React from 'react';
import './App.css';
import { Navigation } from './components/Navigation';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Homepage.jsx'
import { Yamaha } from './pages/Yamaha.jsx';
import { Suzuki } from './pages/Suzuki.jsx';
import BMW from './pages/BMW.jsx';
import { Aprillia } from './pages/Aprillia.jsx';
const App = () =>
{
    return (
        <>
            <header>
                <h1 className='text-center p-4 bg-violet-400 font-semibold text-white text-2xl'>MotoSpecs-Expolorer</h1>
            </header>

            <Navigation />

            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/Yamaha' element={<Yamaha />}></Route>
                <Route path='/Suzuki' element={<Suzuki />}></Route>
                <Route path='/BMW' element={<BMW />}></Route>
                <Route path='/Aprillia' element={<Aprillia />}></Route>
            </Routes>
        </>
    )
}

export default App