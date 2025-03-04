import React from 'react'
import { Link } from 'react-router-dom'

export default function AprilliaModelNavigation()
{
    return (
        <>
            <nav className=' bg-purple-300 size-fit mx-4 h-60 flex'>
                <ul className='flex flex-col items-center justify-around'>
                    <Link to='/Aprillia/1' className='border-b w-full font-semibold text-center hover:bg-purple-700 hover:text-white p-3'>
                        <li>Aprillia RS 150</li>
                    </Link>
                    <Link to='/Aprillia/2' className='border-b w-full font-semibold text-center hover:bg-purple-700 hover:text-white p-3'>
                        <li>Aprillia RS 457</li>
                    </Link>
                    <Link to='/Aprillia/3' className='border-b w-full font-semibold text-center hover:bg-purple-700 hover:text-white p-3'>
                        <li>Aprillia Tuono 660</li>
                    </Link>
                    <Link to='/Aprillia/4' className='border-b w-full font-semibold text-center hover:bg-purple-700 hover:text-white p-3'>
                        <li>Aprillia RSV4 1100</li>
                    </Link>
                </ul>
            </nav>
        </>
    )
}
