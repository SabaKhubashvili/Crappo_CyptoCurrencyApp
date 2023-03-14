import  Earth from '@/assets/Svg/Direct/Earth.svg'
import  Person from '@/assets/Svg/Direct/Person.svg'
import Barchart from '@/assets/Svg/Direct/Barchart.svg'

import React from 'react'
import { ListComponent } from './ListComponent'


export const List = () => {
  const divStylinig = 'flex sm:justify-between xs:justify-center md:mx-0 xs:mx-10 mx-0 md:my-0 my-5  md:w-auto sm:w-[17rem] w-[14rem] xs:flex-nowrap flex-wrap justify-center items-center '
  return (
    <React.Fragment>
        <div className={`${divStylinig}`} >
            <ListComponent  svg={Barchart} title='$30B' desc='Digital Currency Exchanged' />
        </div>
        <div className={`${divStylinig}`}>
            <ListComponent  svg={Person} title='10M+' desc='Trusted Wallets Investor' />
        </div>
        <div className={`${divStylinig}`}>
            <ListComponent svg={Earth} title='195' desc='Countries Supported' />
        </div>
    </React.Fragment>
  )
}
