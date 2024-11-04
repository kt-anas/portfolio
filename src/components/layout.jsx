import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './navBar'
import styles from '../styles/components/layout.module.css'
// import Footer from './footer'

function Layout() {
  return (
    <div>
   <div className={styles.navbar}>
    <Navbar />
   </div>
    <Outlet />
    {/* <Footer /> */}
    </div>
  )
}

export default Layout
