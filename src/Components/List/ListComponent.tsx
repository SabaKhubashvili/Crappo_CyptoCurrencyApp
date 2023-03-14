import React from 'react'

interface Props{
  svg?:string
  title:string
  desc:string
}

export const ListComponent = ({svg,title,desc}:Props) => {
  return (
    <React.Fragment>
        <div className=' bg-primary-gray-50 px-4 py-4 rounded-full'>
            <img src={svg} alt="" />
        </div>
        <div className='xs:ml-6 w-full xs:text-start text-center xs:mt-0 mt-5'>
          {/* Info */}
          <div className='text-4xl font-bold uppercase'>{title}</div>
          <p className='text-gray-400'>{desc} </p>
        </div>
    </React.Fragment>
  )
}
