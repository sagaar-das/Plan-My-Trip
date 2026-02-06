"use client"
import { Button } from '@/components/ui/button'
import { SignInButton, useUser } from '@clerk/nextjs'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const menuOptions = [
    {
        name:'Home',
        path:'/'
    },
    {
        name:'Pricing',
        path:'/pricing'
    },
    {
        name:'Contact us',
        path:'/contact-us'
    }
]

function Header() {

    const{user}= useUser();

  return (

    <div className='flex justify-between items-center p-4'>
        {/* Logo */}
        <div className='flex gap-2 items-center'>
            <Image src={'/logo.svg'} alt='logo' width={30} height={30}  />
            <h2 className='font-bold text-2xl'>Plan My Trip</h2>
        </div>
        

        {/* Menu Options */}
        <div className='flex gap-8 items-center'>
            {menuOptions.map((menu,index)=>(
                
                <Link key={menu.path} href={menu.path}>
                <span className='text-lg font-semibold cursor-pointer 
                 transition-transform duration-300 hover:scale-105 hover:text-primary'>{menu.name}</span>
                </Link>
                
            ))}
        </div>

        {/* Get started Button  */}
        <div>
            {!user?<SignInButton mode='modal'>
            <Button>Get Started</Button>
            </SignInButton>:
            <Link href={'/create-trip'}>
                <Button>Create New Trip</Button>
            </Link>}
        </div>

    </div>
  )
}

export default Header