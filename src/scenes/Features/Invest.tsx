import React from 'react'

import Chart from '@/assets/Images/Chart.webp'
import { MainText } from '@/Components'
import MainButton from '@/Components/MainButton'
const Invest = () => {
  return (
    <div className='mt-20 gap-10 flex md:justify-between items-center md:flex-row flex-col justify-center'>
        <div className='w-full'>
            <MainText>Invest Smart</MainText>
            <p className='my-5 md:w-96 text-white'>Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. </p>
            <MainButton>Learn More</MainButton>
        </div>
        <div className='md:w-auto w-full'>
            <img src={Chart} draggable='false' className='w-full' alt="" />
        </div>
    </div>
  )
}

export default Invest