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

import { YamahaR15 } from './pages/Yamaha/yamahaR15.jsx';
import { YamahaR3 } from './pages/Yamaha/yamahaR3.jsx';
import { YamahaR6 } from './pages/Yamaha/yamahaR6.jsx';
import { YamahaR1M } from './pages/Yamaha/yamahaR1M.jsx';

import { Suzuki150 } from './pages/Suzuki/suzuki150.jsx';
import { Suzuki250 } from './pages/Suzuki/suzuki250.jsx';
import { Suzuki600 } from './pages/Suzuki/suzuki600.jsx';
import { Suzuki1000 } from './pages/Suzuki/suzuki1000.jsx';

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


                <Routes>
                    <Route path='/Yamaha/1' element={<YamahaR15 />} ></Route>
                    <Route path='/Yamaha/2' element={<YamahaR3 />} ></Route>
                    <Route path='/Yamaha/3' element={<YamahaR6 />} ></Route>
                    <Route path='/Yamaha/4' element={<YamahaR1M />} ></Route>
                </Routes>
                <Routes>
                    <Route path='/Suzuki/1' element={<Suzuki150 />} ></Route>
                    <Route path='/Suzuki/2' element={<Suzuki250 />} ></Route>
                    <Route path='/Suzuki/3' element={<Suzuki600 />} ></Route>
                    <Route path='/Suzuki/4' element={<Suzuki1000 />} ></Route>
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
