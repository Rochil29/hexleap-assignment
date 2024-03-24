import React from 'react'
import TicketCard from './TicketCard'
import Image from 'next/image'
import ticket from '../../public/ticket1.png'
import ticket2 from '../../public/ticket2.png'
import ticket3 from '../../public/ticket3.png'
import ticketlight from "../../public/ticketlight.png"
import ticketlight1 from "../../public/ticektlight2.png"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

function CollectionSpotlight() {
    return (
        <div className='py-6'>
            <div className=' dark:bg-gradient-to-b dark:from-[#18282A] dark:to-[#221A2C] bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF] flex flex-col items-center justify-center py-20 px-36'>
                <div className='dark:text-white font-bold text-4xl'>Collection Spotlight</div>
                <div className='dark:text-white text-center mt-8'>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</div>
                <div className='flex flex-row mt-10 '>
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem className="basis-1/3 hidden dark:block"><Image src={ticket} alt='' width={300} /></CarouselItem>
                            <CarouselItem className="basis-1/3 hidden dark:block"><Image src={ticket2} alt='' width={300} /></CarouselItem>
                            <CarouselItem className="basis-1/3 hidden dark:block"><Image src={ticket3} alt='' width={300} /></CarouselItem>
                            <CarouselItem className="basis-1/3 hidden dark:block"><Image src={ticket2} alt='' width={300} /></CarouselItem>
                            <CarouselItem className="basis-1/3 hidden dark:block"><Image src={ticket3} alt='' width={300} /></CarouselItem>
                            <CarouselItem className="basis-1/3 hidden dark:block"><Image src={ticket2} alt='' width={300} /></CarouselItem>
                            <CarouselItem className="basis-1/3 dark:hidden "><Image src={ticketlight} alt='' width={300} /></CarouselItem>
                            <CarouselItem className="basis-1/3 dark:hidden"><Image src={ticketlight1} alt='' width={300} /></CarouselItem>
                            <CarouselItem className="basis-1/3 dark:hidden"><Image src={ticketlight} alt='' width={300} /></CarouselItem>
                            <CarouselItem className="basis-1/3 dark:hidden"><Image src={ticketlight1} alt='' width={300} /></CarouselItem>
                            <CarouselItem className="basis-1/3 dark:hidden"><Image src={ticketlight} alt='' width={300} /></CarouselItem>
                            <CarouselItem className="basis-1/3 dark:hidden"><Image src={ticketlight1} alt='' width={300} /></CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className='bg-transparent rounded-none h-10 border border-[#2C9CF0] hover:bg-transparent'/>
                        <CarouselNext className='bg-transparent border rounded-none h-10 border-[#2C9CF0] hover:bg-transparent'/>
                    </Carousel>

                </div>
            </div>
        </div>
    )
}

export default CollectionSpotlight