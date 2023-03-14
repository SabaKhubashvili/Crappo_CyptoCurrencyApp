import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

interface Props{
    children:React.ReactNode
    isTopOfPage:boolean
    activeSection:string
}
const NavLink = ({children,isTopOfPage,activeSection}:Props) => {

  
  const styiling = isTopOfPage ? 'font-bold text-white' : ' text-black font-bold'
  const isActive = activeSection == children ? ' relative before:w-full before:h-1 before:bg-secondary-100  before:absolute before:bottom-0' :''
  return (
    <AnchorLink  href={`#${children}`} className={` ${styiling} ${isActive} font-Rubik cursor-pointer leading-7 text-base py-1.5 `}>{children}</AnchorLink>
  )
}

export default NavLink