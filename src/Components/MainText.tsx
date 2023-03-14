import React from "react"

interface Props{
    children:React.ReactNode
}
export const MainText = ({children}:Props) => {
  return (
    <h1 className="text-white md:text-4xl sm:text-3xl text-2xl font-bold">
        {children}
    </h1>
  )
}
