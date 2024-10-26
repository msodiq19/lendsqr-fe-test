import React from 'react'
import Logo from './logo'
import styles from './ui.module.scss'
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <Logo />
        <div className={styles.inputbox}>
            <input type="search" />
            <span>
                <Image src="/assets/search.svg" alt="Search" width={12} height={12} />
            </span>
        </div>
        <div className={styles.section}>
            <a href='#' className={styles.docs}>Docs</a>
            <Image src="/assets/notification.svg" alt="Search" width={20} height={20} />
            <div className={styles.avatarBox}>
                <div className={styles.avatar}>
                    <Image src="/assets/avatar.png" alt="Search" width={40} height={40} />
                </div>
                <Image src="/assets/dropdown.svg" alt="Search" width={20} height={20} />
            </div>
        </div>
    </div>
  )
}

export default Navbar