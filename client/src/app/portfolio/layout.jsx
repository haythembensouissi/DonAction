import React from 'react'
import styles from './page.module.css'
import Navbar from '../components/Navbar'

const Layout = ({children}) => {
  return (
    <div>
      <Navbar/>
      <h1 className={styles.mainTitle}>Our Works</h1>
      {children}
    </div>
  )
}

export default Layout