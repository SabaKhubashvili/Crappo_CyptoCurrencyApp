import MainButton from '@/Components/MainButton'
import MainBannerImg from '@/assets/Images/Mainbanner.webp'

import useMediaQuery from '@/hooks/UseMediaQuery'
import { navbar } from '@/types/types'

import {motion} from 'framer-motion'

interface Props{
    setActiveSelection: (value:navbar) => void
}
export const MainBanner = ({setActiveSelection}:Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1024px)")

  return (
    <motion.section id={navbar.Home} onViewportEnter={()=>{setActiveSelection(navbar.Home)}} className=' bg-primary text-white md:h-[50rem] h-[40rem] flex md:items-center '>
        <div className=' max-w-[120rem]  w-11/12 mx-auto md:flex md:justify-between md:items-center '>

        <div className='flex md:justify-between md:basis-3/5 flex-col w-full md:w-[44rem] md:h-auto h-full justify-center'>
            {/* Information */}
            { isAboveMediumScreens ?

                <div className=' bg-primary-gray-50  flex justify-between w-[19rem] md:w-[24rem] items-center   rounded-full py-1 pl-1 pr-4'>
                {/* Top */}
               <div className='text-bg-primary uppercase font-bold md:text-base text-xs  bg-white rounded-full py-2 w-28  px-4'>
                {/* Left */}
                75% Save
               </div>
               <div className='pl-4 text-xs md:text-base'>
                For the Black Friday weekend
               </div>
            </div>
            :
            ''
            }
            <div className='font-bold md:text-5xl text-4xl m  mt-4'>
                {/* Main Title */}
                Fastest & secure platform to invest in crypto
            </div>
            <div className='mt-4 text-primary-gray-50'>
                {/* Main Description */}
                Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.
            </div>
            <div className='mt-6'>
                <MainButton >Try For FREE</MainButton>
            </div>
            
        </div>
        {isAboveMediumScreens ?(
            <div className='relative max-w-7xl w-full md:basis-2/5 before:absolute before:w-full before:h-full before:content-Line before:bottom-[-25rem] before:left-[-20rem]  after:content-Line after:w-full after:h-full after:absolute after:left-18 after:top-[32rem]  '>
                {/* Image */}
                <img src={MainBannerImg} draggable={false}  className='w-full' alt="MainBannerLogo" /> 
            </div>
            )
            :
            ''
        }
        </div>
    </motion.section>
  )
}

