"use client"
import { Button } from '@/components/ui/button'
import { ExternalLink, Star, Wallet } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Hotel } from './ChatBox'
import axios from 'axios'

type Props = {
  hotel: Hotel
}

function HotelCardItems({ hotel }: Props) {

  const [photoUrl, setPhotoUrl] = useState<string>();

  useEffect(() => {
    hotel && GetGooglePlaceDetail();
  }, [hotel])

  const GetGooglePlaceDetail = async () => {
    const result = await axios.post('/api/google-place-detail', {
      placeName: hotel?.hotel_name
    });
    if(result?.data?.e){
      return;
    }
    setPhotoUrl(result?.data)
  }

  return (
    <div className='flex flex-col gap-1'>
      <Image src={'/hotel.png'} alt='place-image' width={400} height={200}
        className='rounded-xl shadow object-cover mb-2'
      />
      <h2 className='font-semibold text-lg'>{hotel?.hotel_name}</h2>
      <h2 className='text-gray-500 '>{hotel.hotel_address}</h2>
      <div className='flex justify-between items-center'>
        <p className='flex gap-2 items-center'><Wallet />{hotel.price_per_night}</p>
        <p className='flex gap-2 items-center text-primary'><Star /> {hotel.rating}</p>
      </div>
      <p className='line-clamp-3 text-gray-500'>{hotel.description}</p>
      <Link href={'https://www.google.com/maps/search/?api=1&query=' + hotel?.hotel_name} target='_blank'>
        <Button size={'sm'} variant={'outline'} className='w-full mt-2'>View <ExternalLink /></Button>
      </Link>
    </div>
  )
}

export default HotelCardItems