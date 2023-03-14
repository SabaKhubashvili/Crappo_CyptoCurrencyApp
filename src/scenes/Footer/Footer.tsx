import Logo from '@/assets/Images/Navbar/CrappoWhite.webp'
import { BitcoinWhite, Facebook, Github, InstagramSmall, Mastercard,  Visa } from '@/assets/Svg'

export const Footer = () => {
    const liStyiling = 'my-2 '
  return (
    <footer className='bg-primary '>
        <div className='w-11/12 mx-auto text-white flex md:flex-row flex-col md:justify-between '>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div className='md:mt-0 mt-20'>
                <h1 className='font-bold text-2xl'>Quick Link</h1>
                <ul className='list-none mt-8'>
                    <li className={`${liStyiling}`}>Home</li>
                    <li className={`${liStyiling}`}>Products</li>
                    <li className={`${liStyiling}`}>About</li>
                    <li className={`${liStyiling}`}>Features</li>
                    <li className={`${liStyiling}`}>Contact</li>
                </ul>
            </div>
            <div className='md:mt-0 mt-10'>
                <h1 className='font-bold text-2xl'>Resources</h1>
                <ul className='list-none mt-8'>
                    <li className={`${liStyiling}`}>Download Whitepapper</li>
                    <li className={`${liStyiling}`}>Smart Token</li>
                    <li className={`${liStyiling}`}>Blockchain Explorer</li>
                    <li className={`${liStyiling}`}>Crypto Api</li>
                    <li className={`${liStyiling}`}>Interest</li>
                </ul>
            </div>
            <div className='md:mt-0 my-10'>
                <h1 className='font-bold text-2xl '>We accept following payment systems</h1>
                <div className='flex xs:flex-row mt-10 flex-col '>
                    <div className='px-6 py-4 xs:my-0 my-6 justify-center rounded-xl bg-primary-gray-50 flex items-center mx-4'>
                        <Visa/>
                    </div>
                    <div className='px-6 py-4 xs:my-0 my-6 justify-center rounded-xl bg-primary-gray-50 flex items-center mx-4'>
                        <Mastercard/>
                    </div>
                    <div className='px-6 py-4 xs:my-0 my-6 justify-center rounded-xl bg-primary-gray-50 flex items-center mx-4'>
                        <BitcoinWhite/>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-11/12 py-6 mx-auto flex justify-between text-white mt-20 font-bold uppercase'>
            <p>©2021 CRAPPO. All rights reserved</p>
            <div className='xs:flex  hidden'>
                <a href='https://www.facebook.com/profile.php?id=100011187067102' target='_blank' className='mx-4'>
                    <Facebook/>
                </a>
                <a href='https://www.instagram.com/xubashvili.saba12/' target='_blank' className='mx-4'>
                    <InstagramSmall/>
                </a>
                <a href='https://github.com/SabaKhubashvili ' target='_blank' className='mx-4'>
                    <Github/>
                </a>
            </div>
        </div>
    </footer>
  )
}
