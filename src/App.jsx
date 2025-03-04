import React from 'react';
import './App.css';
import { Navigation } from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage.jsx';
import { Yamaha } from './pages/Yamaha.jsx';
import { Suzuki } from './pages/Suzuki.jsx';
import { BMW } from './pages/BMW.jsx';

import { Aprillia } from './pages/Aprillia.jsx';
import { Aprillia150 } from './pages/Aprillia/Aprillia150.jsx';
import { ApriliaRS457 } from './pages/Aprillia/ApriliaRS457.jsx';
import { ApriliaTuono660 } from './pages/Aprillia/ApriliaTuono660.jsx';
import { ApriliaRSV41100 } from './pages/Aprillia/ApriliaRSV41100.jsx';

const App = () =>
{
    return (
        <div className="min-h-screen flex flex-col">
            <header>
                <h1 className='text-center p-4 bg-violet-400 font-semibold text-white text-2xl'>MotoSpecs-Explorer</h1>
            </header>
            <Navigation />
            <div className="flex-grow">
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/Yamaha' element={<Yamaha />}></Route>
                    <Route path='/Suzuki' element={<Suzuki />}></Route>
                    <Route path='/BMW' element={<BMW />}></Route>
                    <Route path='/Aprillia' element={<Aprillia />}></Route>
                </Routes>

                <Routes>
                    <Route path='/Aprillia/1' element={<Aprillia150 />}></Route>
                    <Route path='/Aprillia/2' element={<ApriliaRS457 />}></Route>
                    <Route path='/Aprillia/3' element={<ApriliaTuono660 />}></Route>
                    <Route path='/Aprillia/4' element={<ApriliaRSV41100 />}></Route>
                </Routes>
            </div>
            <footer className='flex items-center justify-center bg-purple-800 h-[5vh] text-white'>
                <p>copyright {new Date().getFullYear()} by MJ.</p>
                <a href="https://github.com/MUMEi-28/MotoSpecs-Explorer" target='blank' className='underline ml-2'>Github Repository</a>
            </footer>
        </div>
    )
}

export default App;
