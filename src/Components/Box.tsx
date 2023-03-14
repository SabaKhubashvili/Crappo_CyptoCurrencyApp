import React from 'react'
import MainButton from './MainButton'
import Arrow from '@/assets/Svg/Direct/Arrow.svg'

interface Props{
    color:string
    title:string
    shortedTitle:string
    desc:string
    svg:string
}

export const Box = ({color,title,shortedTitle,desc,svg}:Props) => {

    const textColor= color == 'white' ? 'text-white' : 'text-black'

  return (
    <React.Fragment>
        <div>
            <img src={svg} alt="" />
        </div>
        <div className={`mt-8 font-bold flex ${textColor}`}>
            <h1 className='uppercase text-3xl '>
                {title}
            </h1>
            <p className={`text-gray-400 ml-2`}>
                {shortedTitle}
            </p>
        </div>
        <p className={color == 'white' ? `md:w-64 text-center mt-4 text-white` : 'md:w-64 text-center mt-4'}>{desc}</p>
        <div className='mt-6'>
            <MainButton svg={Arrow} >Start Maining Now</MainButton>
        </div>
    </React.Fragment>
  )
}
