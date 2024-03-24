import Image from 'next/image'
import React from 'react'
import pic from '../../public/pic.png'

function Card({ image, title, totalEvents, name }: { image: any, title: string, totalEvents: number, name: string }) {
    return (
        <div className='p-3 dark:bg-[#3B3E47] w-fit flex flex-col gap-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
            <Image src={image} alt='' width={250} height={500} />
            <div className='font-bold dark:text-white'>{title}</div>
            <div className='dark:bg-[#292B32] bg-[#F7F7F8] dark:text-white text-black text-start p-2 flex flex-row justify-between'>
                <div className='flex flex-col justify-between text-sm'>
                    <h1 className='dark:text-[#DFDFDF]'>Total Events</h1>
                    <h1>{totalEvents} Events</h1>
                </div>
                <div className='flex flex-col text-start text-sm'>
                    <h1 className='dark:text-[#DFDFDF]'>Sport</h1>
                    <h1>{name}</h1>
                </div>
            </div>
        </div>
    )
}

export default Card