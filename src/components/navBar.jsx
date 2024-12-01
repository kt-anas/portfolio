import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/components/navBar.module.scss'

function Navbar() {
  return (
    <div className={styles.navbar}>  
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/works">Works</Link>
      <Link to="/contact">Contact</Link>
      <div className={styles['animation start-home']}></div>
    </div>
  )
}

export default Navbar