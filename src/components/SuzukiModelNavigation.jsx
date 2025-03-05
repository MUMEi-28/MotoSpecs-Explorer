import React from 'react'

import { Link } from 'react-router-dom'

export const SuzukiModelNavigation = () =>
{
    return (
        <nav className=' bg-purple-300 size-fit mx-4 h-60 flex'>
            <ul className='flex flex-col items-center justify-around'>

                <Link to='/Suzuki/1' className='border-b w-full font-semibold text-center hover:bg-purple-700 hover:text-white p-3'>
                    <li>Suzuki GSX-R150</li>
                </Link>
                <Link to='/Suzuki/2' className='border-b w-full font-semibold text-center hover:bg-purple-700 hover:text-white p-3'>
                    <li>Suzuki GSX-250R</li>
                </Link>
                <Link to='/Suzuki/3' className='border-b w-full font-semibold text-center hover:bg-purple-700 hover:text-white p-3'>
                    <li>Suzuki GSX-R600</li>
                </Link>
                <Link to='/Suzuki/4' className='border-b w-full font-semibold text-center hover:bg-purple-700 hover:text-white p-3'>
                    <li>Suzuki GSX-R1000</li>
                </Link>
            </ul>
        </nav>
    )
}
