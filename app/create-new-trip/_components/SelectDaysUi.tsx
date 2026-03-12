import { Button } from '@/components/ui/button';
import React, { useState } from 'react'

function SelectDaysUi({ onSelectedOption }: any) {
  const [days, setdays] = useState(3);
  return (
    <div className='flex flex-col items-center justify-center mt-6 p-6 bg-white rounded-2xl'>
        <h2 className='mt-3 text-lg font-semibold '>
            How many days do you want to travel?
        </h2>

      <div className='flex flex-col  gap-5 mt-4'>
        <div className='grid grid-cols-3 md:grid-cols-3 gap-2 items-center '>
          <Button
            className='p-3 border rounded-2xl
                 bg-white hover:border-primary cursor-pointer text-black text-3xl hover:bg-white '
            onClick={() => { setdays(d => d - 1) }}
          >-</Button>
          <h2 className='ml-3 mr-2 text-2xl'>{days} days</h2>
          <Button  
            className='p-3 border rounded-2xl
                 bg-white hover:border-primary cursor-pointer text-black text-2xl hover:bg-white'
            onClick={() => { setdays(d => d + 1) }}
          >+</Button>
        </div>
        <Button onClick={() => onSelectedOption(days + " days")}>Confirm</Button>

      </div>

    </div>
  )
}

export default SelectDaysUi