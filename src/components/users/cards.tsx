import React from 'react'
import styles from './users.module.scss'
import Image from 'next/image'

interface IProp {
    icon: string,
    title: string,
    amount: string
}


const Cards = ({ icon, title, amount }: IProp) => {
  return (
    <div className={styles.card}>
        <Image src={icon} alt="users-all" width={32} height={32} />
        <p className={styles.title}>{title}</p>
        <p className={styles.amount}>{amount}</p>
    </div>
  )
}

export default Cards