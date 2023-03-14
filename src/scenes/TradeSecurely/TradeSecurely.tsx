import { Box } from "@/Components"
import Bitcoin from '@/assets/Svg/Direct/Bitcoin.svg'
import Etherium from '@/assets/Svg/Direct/Etherium.svg'
import Litecoin from '@/assets/Svg/Direct/Litecoin.svg'
import { navbar } from "@/types/types"
import { motion } from "framer-motion"

interface Props{
    setActiveSelection: (value:navbar) => void
}

export const TradeSecurely = ({setActiveSelection}:Props) => {
  return (
    <motion.section id={navbar.Products} onViewportEnter={()=>setActiveSelection(navbar.Products)} className="mx-auto w-11/12 mt-20 py-36">
        <div className="font-bold md:text-4xl sm:text-3xl text-2cleaxl text-center md:w-[40rem] w-full mx-auto">
            {/* Title */}
            Trade securely and market the high growth cryptocurrencies.
        </div>
        <div className="flex justify-center items-center mt-20 flex-wrap md:flex-row flex-col  ">
            <div className="flex flex-col justify-between items-center bg-secondary-200 py-10  md:px-6 md:md:w-96 w-full md:mx-10 md:my-4 my-5  rounded-lg">
                <Box color='white'   title='Bitcoin' shortedTitle='BTC' desc='Digital currency in which a record of transactions is maintained.' svg={Bitcoin}/>
            </div>
            <div className="flex flex-col justify-between items-center bg-white py-10 md:px-6 md:w-96 w-full md:mx-10 md:my-4 my-5  rounded-lg">
                <Box  color='black'  title='Ethereum' shortedTitle="ETC" desc='Blockchain technology to create and run decentralized digital applications.' svg={Etherium}/>
            </div>
                <div className="flex flex-col justify-between items-center bg-white py-10 md:px-6 md:w-96  w-full md:mx-10 md:my-4 my-5 rounded-lg">
                    <Box  color='black ' title='Litecoin' shortedTitle="LTC" desc='Cryptocurrency that enables instant payments to anyone in the world.' svg={Litecoin}/>
                </div>
        </div>
    </motion.section>
  )
}
