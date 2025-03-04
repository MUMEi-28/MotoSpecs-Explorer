import React from 'react'

const Homepage = () =>
{
    return (
        <>
            <div className='homepage-background'>
                <div className='p-4  shadow-sm rounded-full'>
                    <h1 className='text-4xl mb-12'>Find Your Perfect Ride – Explore MotoSpecs</h1>
                    <h2 className='text-2xl'>Discover top motorcycle brands, <br />
                        compare specs, and choose your dream ride.</h2>

                </div>
                <button className=' bg-purple-700 cursor-pointer text-white p-4 my-12 hover:bg-purple-600 active:bg-purple-600/80'>Explore Bikes Now</button>
            </div>
        </>
    )
}

export default Homepage