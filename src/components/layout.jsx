import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import styles from '../styles/components/layout.module.css'

function Layout() {
  return (
    <div>
   <div className={styles.navbar}>
    <Navbar />
   </div>
    <Outlet />
    
    </div>
  )
}

export default Layout
