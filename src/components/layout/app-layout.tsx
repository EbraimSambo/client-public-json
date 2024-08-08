import React, { FC, ReactNode } from 'react'
import NavBar from '../bases/nav-bar'
import Footer from '../bases/footer'

interface App {
  children: ReactNode
}
const AppLayout: FC<App> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default AppLayout