import React from 'react'
import { Link } from 'react-router-dom'


export const Navigation = () =>
{
    return (
        <nav className=' bg-violet-50 m-4 shadow-md'>
            <ul className='flex flex-row items-center justify-around '>
                <Link to='/' className='hover:bg-violet-200 hover:rounded-xl text-slate-800 font-semibold text-lg m-1 py-4 flex-1 text-center'>
                    <li >Home</li>
                </Link>
                <Link to='/Yamaha' className='hover:bg-violet-200 hover:rounded-xl text-slate-800 font-semibold text-lg m-1 py-4 flex-1 text-center'>
                    <li >Yamaha</li>
                </Link>
                <Link to='/Suzuki' className='hover:bg-violet-200 hover:rounded-xl text-slate-800 font-semibold text-lg m-1 py-4 flex-1 text-center'>
                    <li >Suzuki</li>
                </Link>
                <Link to='/BMW' className='hover:bg-violet-200 hover:rounded-xl text-slate-800 font-semibold text-lg m-1 py-4 flex-1 text-center'>
                    <li >BMW</li>
                </Link>
                <Link to='/Aprillia' className='hover:bg-violet-200 hover:rounded-xl text-slate-800 font-semibold text-lg m-1 py-4 flex-1 text-center'>
                    <li >Aprillia</li>
                </Link>
            </ul>
        </nav>
    )
}
