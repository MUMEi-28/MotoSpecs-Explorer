import React from 'react'
import BmwModelNavigation from '../../components/BmwModelNavigation'
import { bmwData } from '../../data/bmwData'

export const F900R = () =>
{

    const f900r = bmwData.filter(bike => bike.category == "900cc");

    return (
        <div className='flex flex-row items-center justify-around'>

            <BmwModelNavigation />


            <section className='text-center flex flex-col items-center justify-center'>
                {
                    f900r.map((bike, index) => (
                        <div key={index} className='flex flex-col items-center justify-center'>
                            <img className='h-[50vh]' src={bike.image} alt="BMW" />
                            <h1 className=' my-4 text-3xl font-bold'>{bike.name}</h1>
                            <table className='border p-2  '>
                                <thead>
                                    <tr>
                                        <th className='border p-2'>Engine</th>
                                        <th className='border p-2'>Power</th>
                                        <th className='border p-2'>Top Speed</th>
                                        <th className='border p-2'>Features</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='border p-2'>{bike.engine}</td>
                                        <td className='border p-2'>{bike.power}</td>
                                        <td className='border p-2'>{bike.topSpeed}</td>
                                        <td className='border p-2'>{bike.features}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    ))
                }

            </section>
        </div>
    )
}
