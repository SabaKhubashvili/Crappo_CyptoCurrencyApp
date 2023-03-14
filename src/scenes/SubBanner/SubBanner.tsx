import { Motherboard } from '@/assets/Svg'
import { List, MainText } from '@/Components'
import MainButton from '@/Components/MainButton'
import React from 'react'
import {motion} from 'framer-motion'
import { navbar } from '@/types/types'

interface Props{
    setActiveSelection: (value:navbar) => void
}

export const SubBanner = ({setActiveSelection}:Props) => {

  return (
    
    <motion.section id={navbar.About} onViewportEnter={()=>{setActiveSelection(navbar.About)}}  className='bg-primary text-white'>
       <div className='max-w-[120rem]  w-11/12 mx-auto'>
            <div className='flex md:justify-between py-10 items-center justify-center md:flex-nowrap flex-wrap'>
                {/* Lists */}
                <List/>
            </div>
            <div className='mt-10 flex md:flex-row flex-col justify-center items-center'>
                <div className='md:w-[35rem] w-full' >
                    <Motherboard/>
                </div>
                <div className='md:w-[30rem] md:mt-0 mt-28'>
                    <MainText>Why you should choose CRAPPO</MainText>
                    <p className='text-gray-400 my-10 '>If you're looking to try out a new 
                    cryptocurrency platform, Crappo might be worth considering. While it may 
                    not be as well-known as some of the bigger names in the industry, it has a 
                    quite few features that could make it an attractive option for some users.</p>
                    <MainButton>Learn More</MainButton>
                </div>
            </div>
        </div> 
    </motion.section>
  )
}
