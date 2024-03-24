import Image from 'next/image'
import React from 'react'
import ad from "../../public/ad.png"
import ad1 from "../../public/ad1.svg"

function Add() {
    return (
        <div className='p-3 dark:bg-[#3B3E47] flex flex-col gap-4 w-[274px] h-[580px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
            <div className='relative h-[250px]'>
                <Image className='absolute' src={ad} alt='' width={250} height={500} />
                <Image className='absolute right-0' src={ad1} alt='' width={50} height={50} />
            </div>
            <div className='font-bold dark:text-white'>Advertisement title</div>
            <div className='dark:text-white'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
        </div>
    )
}

export default Add