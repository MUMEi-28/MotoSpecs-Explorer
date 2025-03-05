import React from 'react'
import { Link } from 'react-router-dom'

export default function BmwModelNavigation()
{
    return (
        <>
            <nav className=' bg-purple-300 size-fit mx-4 h-40 flex'>
                <ul className='flex flex-col items-center justify-around'>
                    <Link to='/BMW/1' className='border-b w-full font-semibold text-center hover:bg-purple-700 hover:text-white p-3'>
                        <li>BMW G 310 R</li>
                    </Link>
                    <Link to='/BMW/2' className='border-b w-full font-semibold text-center hover:bg-purple-700 hover:text-white p-3'>
                        <li>BMW F 900 R</li>
                    </Link>
                    <Link to='/BMW/3' className='border-b w-full font-semibold text-center hover:bg-purple-700 hover:text-white p-3'>
                        <li>BMW S 1000 RR</li>
                    </Link>
                </ul>
            </nav>
        </>
    )
}
