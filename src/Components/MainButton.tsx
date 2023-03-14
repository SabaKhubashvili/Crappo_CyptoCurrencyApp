


interface Props{
    children:React.ReactNode
    svg?:string
}

const MainButton = ({children,svg}:Props) => {
  const isSvg = svg ? 'flex justify-between items-center' :''
  return (
    <button className={`${isSvg} bg-secondary-100 px-6 py-4 rounded-full text-white `}>
      <div>
        {children} 
      </div>

        {svg ?
        <div className="rounded-full  bg-white ml-4">
         <img src={svg} alt="" className="p-2" />
        </div>
        : ''  
      }
      
    </button>
  )
}

export default MainButton