import React from 'react'
import AprilliaModelNavigation from '../../components/AprilliaModelNavigation'
import { aprillaData } from '../../data/aprillaData'

export const ApriliaTuono660 = () =>
{

    const aprilla600 = aprillaData.filter(bike => bike.category == "600cc");

    return (
        <div className='flex flex-row items-center justify-around'>

            <AprilliaModelNavigation />


            <section className='text-center flex flex-col items-center justify-center'>

                {aprilla600.map((bike, index) => (

                    <div key={index} className='flex flex-col items-center justify-center'>
                        <img className='h-[50vh]' src={bike.image} alt="Aprilla" />
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
                ))}


            </section>
        </div>
    )
}
