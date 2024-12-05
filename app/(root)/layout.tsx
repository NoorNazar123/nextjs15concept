import React from 'react'
import { Header } from '../components/Header'
import Footer from '../components/footer'

const layout = ({ children } : { children: React.ReactNode}) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default layout