import React from 'react'
import { YamahaModelNavigation } from '../../components/YamahaModelNavigation'
import { yamahaData } from '../../data/yamahaData'


export const YamahaR3 = () =>
{

    const r3 = yamahaData.filter(bike => bike.category == "300cc");


    return (
        <div className='flex flex-row items-center justify-around'>
            <YamahaModelNavigation />
            <section className='text-center flex flex-col items-center justify-center'>

                {
                    r3.map((bike, index) => (
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
