import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navBar'
import styles from '../styles/layouts/layout.module.scss'
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
