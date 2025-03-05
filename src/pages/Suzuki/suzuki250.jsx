import React from 'react'
import { SuzukiModelNavigation } from '../../components/SuzukiModelNavigation'
import { suzukiData } from '../../data/suzukiData'


export const Suzuki250 = () =>
{

    const gsx250 = suzukiData.filter(bike => bike.category == "250cc");


    return (
        <div className='flex flex-row items-center justify-around'>
            <SuzukiModelNavigation />
            <section className='text-center flex flex-col items-center justify-center'>

                {
                    gsx250.map((bike, index) => (
                        <div key={index} className='flex flex-col items-center justify-center'>
                            <img className='h-[50vh]' src={bike.image} alt="Yamaha" />
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
