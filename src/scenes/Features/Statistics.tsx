import Statistic from '@/assets/Images/Statistic.webp'
import { MainText } from '@/Components'
import MainButton from '@/Components/MainButton'

const Statistics = () => {
  return (
    <div className='flex md:justify-between border-solid border-t-2 border-t-gray-700 md:border-none pt-10 justify-center gap-0 md:flex-row flex-col mt-20'>
        <div className='w-full basis-1/2 '>
            <img src={Statistic} className='w-full rounded-xl' alt="" />
        </div>
        <div className='flex items-start flex-col justify-center md:mt-0 mt-20'>
            <MainText>Detailed Statistics</MainText>
            <p className='my-5 md:w-96 text-white '>View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.</p>
            <MainButton>Learn More</MainButton>
        </div>
    </div>
  )
}

export default Statistics