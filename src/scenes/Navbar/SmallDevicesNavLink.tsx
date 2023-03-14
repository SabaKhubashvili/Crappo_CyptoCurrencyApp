import { Arrow } from '@/assets/Svg'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

interface Props{
    children:React.ReactNode
    setMenu:(value:boolean)=>void
}
const SmallDevicesNavLink = ({children,setMenu}:Props) => {
  return (
    <AnchorLink  onClick={()=>{setMenu(false)}} href={`#${children}`}className=' flex justify-between items-center py-4 xs:text-4xl text-2xl my-2 relative before:absolute before:bg-primary-gray-100 before:h-0.5 before:w-full before:bottom-0'>
      
    <div>
     {children}
    </div> 
    <div>
      <Arrow/>
    </div>
      
    </AnchorLink>
  )
}

export default SmallDevicesNavLink