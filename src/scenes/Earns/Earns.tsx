import ApiUrl from '@/Api/ApiUrl'
import RestClient from '@/Api/RestClient'
import { Loading } from '@/assets/Svg'
import { MainText } from '@/Components'
import MainButton from '@/Components/MainButton'
import { earning, navbar, query } from '@/types/types'
import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import React, { ChangeEvent, HTMLInputTypeAttribute } from 'react'

interface Props{
    setActiveSelection: (value:navbar) => void
}

export const Earns = ({setActiveSelection}:Props) => {

    
    const [earnings,setEarnings] = React.useState<earning>({
        etherium:0,
        money:0
    });

    const [inputData,setInputData] = React.useState<number>();

    const {data:cryptoData,error,isLoading} = useQuery([query.ehtereum], () =>{
       return RestClient.getRequest(ApiUrl.CryptoUrl)
                .then((res)=>res.data)
    })
        
            

    function Calculate(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(!inputData){
            
        }else if(inputData && cryptoData){
                  
            const hashRate = inputData;

            // Define the current block reward for Ethereum
            const blockReward = 2;

            // Calculate your earnings per second
            const earningsPerSecond = (hashRate * blockReward) / 1e18;

            // Convert your earnings per second to an hourly rate
            const earningsPerHour = earningsPerSecond * 3600;

            const earningsPerDay = earningsPerHour * 24;

            const money = earningsPerDay * cryptoData.ethereum.usd;

            setEarnings({
                money:money,
                etherium:earningsPerDay
            });

        }   

       
    }


    
  return (
   <motion.section id={navbar.Earn} onViewportEnter={()=>{setActiveSelection(navbar.Earn)}}>
    <section className='bg-primary pt-20 flex justify-center'>
        <div className='w-11/12 text-center h-[15rem] text-white '>
            <MainText>Check how much you can earn</MainText>
            <p className=' sm:w-[34rem] w-full mx-auto mt-5'>Let’s check your hash rate to see how much you will earn today, Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
    </section>
        <div className=' sm:w-[45rem] w-full mx-auto rounded-xl sm:mt-[-4rem] mt-0 sm:px-10 px-5 py-16 bg-white'>
            <form onSubmit={Calculate} className='flex  sm:items-center justify-between sm:flex-row flex-col '>
                <input  onChange={(e:ChangeEvent<HTMLInputElement>)=>{setInputData(e.target.valueAsNumber)}}  type="number" placeholder='Enter you hash rate' className='text-black border-solid outline-none border-b-gray-300 border-b-2 '/>
                <div className='sm:ml-10 sm:my-0 my-10 py-1 w-full sm:w-40 border-solid border-b-2 border-b-gray-300 '>
                    H/S
                </div>

                    <MainButton>Calculate</MainButton>

            </form>
            <div className='py-10'>{!isLoading ?
            (
                <React.Fragment>
                    <p className='text-primary uppercase'>ESTIMATED 24 HOUR REVENUE:</p>
                    <h1 className='uppercase font-bold mt-4 sm:text-4xl xs:text-2xl text-xl'>
                    {earnings.etherium} ETH 
                        <span className='text-primary ml-2 '>
                            (${earnings.money})
                        </span>
                    </h1>
                    <p className='mt-3 text-gray-400'>Revenue will change based on mining difficulty and Ethereum price.</p>
                </React.Fragment>
            )
                :
                (
                    <Loading/>
                )
            }
            </div>
        </div>

    
    </motion.section>
  )
}
