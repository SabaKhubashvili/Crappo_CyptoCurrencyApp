import React from 'react'
import { MainText } from './MainText'

export const NewsLetter = () => {
  return (
    <div className='w-11/12 mx-auto flex md:justify-between md:items-center md:flex-row flex-col bg-secondary-100 sm:px-10 px-6 py-16 rounded-xl
                    relative before:absolute md:before:w-96 md:before:h-full md:before:l-10 md:before:content-Etherium '>
        <div className='md:basis-2/5'>
            <MainText>Start mining now</MainText>
            <p className='md:w-80 mt-6 text-white'>Join now with CRAPPO to get the latest news and start mining now</p>
        </div>
        <div className='md:basis-3/5'>
            <form className='flex md:w-auto sm:flex-row flex-col w-full md:mt-0 mt-10 '>
                <input type="text" placeholder='Enter Your Email' className='md:w-full w-full border-solid border-b-2 border-b-gray-400 bg-transparent outline-none' />
                <button className='sm:ml-10 sm:mt-0 mt-10 bg-white py-4 px-10 rounded-full'>Submit</button>
            </form>
        </div>
    </div>
  )
}
