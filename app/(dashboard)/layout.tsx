import React from 'react'
import Footer from '../components/footer'
import DashboardHeader from '../components/DashboardHeader'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <DashboardHeader />
        <div>{children}</div>
        <Footer />
    </div>
  )
}

export default layout