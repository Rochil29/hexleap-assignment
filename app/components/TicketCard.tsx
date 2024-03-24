import Image from 'next/image'
import React from 'react'
import ticket from './../../public/Ticket_Mockup 3.png'

function TicketCard() {
    return (
        <div className='bg-[#3B3E47] py-2 mt-10'>
            <Image className='' src={ticket} alt='' width={210} height={100} />
            <div className='flex flex-row justify-between'>
                <div className='bg-transparent opacity-0 h-4 w-4 border border-red-300'></div>
                <div></div>
                <div className='bg-transparent opacity-0 h-4 w-4 border border-red-300'></div>
            </div>
        </div>
    )
}

export default TicketCard