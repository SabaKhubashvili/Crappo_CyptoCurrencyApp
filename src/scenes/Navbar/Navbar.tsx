import React from 'react'

import Logo from '@/assets/Images/Navbar/CrappoWhite.webp'
import LogoBlack from '@/assets/Images/Navbar/CrappoBlack.webp'

import NavLink from './NavLink'
import useMediaQuery from '@/hooks/UseMediaQuery'
import { Close, Hamburger, HamburgerBlack, Instagram } from '@/assets/Svg'
import SmallDevicesNavLink from './SmallDevicesNavLink'
import { navbar } from '@/types/types'

interface Props{
  isTopOfPage:boolean
  activeSection:string
}

export const Navbar = ({isTopOfPage,activeSection}:Props) => {
  const [Menu,setMenu] = React.useState<boolean>(false)
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")

  const navStyiling = isTopOfPage ? 'bg-transparent' : 'bg-white shadow-NavShadow '
  const loginStyiling = isTopOfPage ? 'text-white' : 'text-black'

  return (
    <nav className={` ${navStyiling} w-full  transition-all duration-300   fixed z-50 right-0 top-0 left-0`}>

      <div className={` transition-all duration-200 py-6 max-w-[120rem]  w-11/12 mx-auto  flex justify-between items-center `}>

        <div>
            {/* Navbar Left Logo */}
            {isTopOfPage ? (

              <img src={Logo} alt="" />
              )
              :(
                <img src={LogoBlack} alt="" />
              )
            }
        </div>
    {isAboveMediumScreens?(
      <div className='flex items-center justify-between'>
          {/* Navbar Right Components */}
          <div className='flex gap-4'>

            <div className='mx-2'>
              <NavLink isTopOfPage={isTopOfPage} activeSection={activeSection}>{navbar.Home}</NavLink>
            </div>
            <div className='mx-2'>
              <NavLink isTopOfPage={isTopOfPage} activeSection={activeSection}>{navbar.About}</NavLink>
            </div>
            <div className='mx-2'>
              <NavLink isTopOfPage={isTopOfPage} activeSection={activeSection}>{navbar.Earn}</NavLink>
            </div>
            <div className='mx-2'>
              <NavLink isTopOfPage={isTopOfPage} activeSection={activeSection}>{navbar.Products}</NavLink>
            </div>
            <div className='mx-2'>
              <NavLink isTopOfPage={isTopOfPage} activeSection={activeSection}>{navbar.Features}</NavLink>
            </div>
            <div className='mx-2'>
              <NavLink isTopOfPage={isTopOfPage} activeSection={activeSection}>{navbar.Contact}</NavLink>
            </div>
          </div>
        </div>
    )
    :(
      <div className='sm:w-20 w-14' onClick={()=>{setMenu(true)}}>
        {isTopOfPage ?

          <Hamburger/>
          :
          <HamburgerBlack/>
        }
      </div>
    )}
    </div>
    {!isAboveMediumScreens && Menu ?
      <div className='fixed top-0 px-4  bg-primary w-full h-full text-white flex flex-col justify-between '>
        <div className='xs:mx-6 my-10 flex justify-between'>
          {/* Logo And Close */}
          <div>
            {/* Logo */}
            <img src={Logo} alt="" />
          </div>

          <div className='w-10' onClick={()=>{setMenu(false)}}>
            <Close/>
          </div>
        
        </div>

        <div>
          <div>
            <SmallDevicesNavLink setMenu={setMenu}>{navbar.Home}</SmallDevicesNavLink>
          </div>
          <div>
            <SmallDevicesNavLink setMenu={setMenu}>{navbar.Features}</SmallDevicesNavLink>
          </div>
          <div>
            <SmallDevicesNavLink setMenu={setMenu}>{navbar.About}</SmallDevicesNavLink>
          </div>
          <div>
            <SmallDevicesNavLink setMenu={setMenu}>{navbar.Contact}</SmallDevicesNavLink>
          </div>
        </div>
        <div className='flex flex-col items-center  h-auto border-solid border-2 border-white rounded-lg mb-10 justify-center' >
          <div className='border-solid border-b-2 border-white py-2 w-full flex items-center justify-center '>
              <Instagram/>
          </div>
          <div className='h-full text-center py-6 font-bold'>
            © Copyright 2023 CRAPPO, All Rights Reserved. Contact Us. Site By Saba Khubashvili
          </div>
        </div>
      </div>
      :
      ''}

    </nav>
  )
}

