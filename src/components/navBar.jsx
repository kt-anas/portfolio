import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/components/navBar.module.css'

function Navbar() {
  return (
    <div className={styles.navbar}>
        
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/works">Works</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Navbar