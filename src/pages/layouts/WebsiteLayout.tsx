
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main style={{ border: '1px solid red' }}>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default WebsiteLayout