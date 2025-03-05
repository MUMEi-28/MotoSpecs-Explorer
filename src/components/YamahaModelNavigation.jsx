import React from 'react'

import { Link } from 'react-router-dom'

export const YamahaModelNavigation = () =>
{
    return (
        <nav className=' bg-purple-300 size-fit mx-4 h-60 flex'>
            <ul className='flex flex-col items-center justify-around'>

                <Link to='/Yamaha/1' className='border-b w-full font-semibold text-center hover:bg-purple-700 hover:text-white p-3'>
                    <li>Yamaha YZF-R15</li>
                </Link>
                <Link to='/Yamaha/2' className='border-b w-full font-semibold text-center hover:bg-purple-700 hover:text-white p-3'>
                    <li>Yamaha R3</li>
                </Link>
                <Link to='/Yamaha/3' className='border-b w-full font-semibold text-center hover:bg-purple-700 hover:text-white p-3'>
                    <li>Yamaha YZF-R6</li>
                </Link>
                <Link to='/Yamaha/4' className='border-b w-full font-semibold text-center hover:bg-purple-700 hover:text-white p-3'>
                    <li>Yamaha YZF-R1M</li>
                </Link>
            </ul>
        </nav>
    )
}
