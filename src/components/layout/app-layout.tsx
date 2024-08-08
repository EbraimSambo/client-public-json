import React, { FC, ReactNode } from 'react'
import NavBar from '../bases/nav-bar'

interface App{
    children: ReactNode
}
const AppLayout: FC<App> = ({children}) => {
  return (
    <div> 
        <NavBar />
        <main>{children}</main>
     </div>
  )
}

export default AppLayout