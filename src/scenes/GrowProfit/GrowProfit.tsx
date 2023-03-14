import React from 'react'
import Table from '@/assets/Images/GrowTable.webp'

import { MainText } from '@/Components'
import MainButton from '@/Components/MainButton'
export const GrowProfit = () => {
  return (
    <div className='mt-20 pt-10 flex md:justify-between justify-center
                    items-center md:flex-row flex-col md:border-none
                    border-solid border-t-2 border-gray-500'>
        <div className='basis-1/2'>
            <MainText>Grow your profit and track your investments</MainText>
            <p className='my-5 md:w-96 text-white '>Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.</p>
            <MainButton>Learn More</MainButton>
        </div>
        <div className='md:basis-1/2 w-full md:mt-0 mt-20'>
            <img src={Table} className='w-full' alt="" />
        </div>
    </div>
  )
}
