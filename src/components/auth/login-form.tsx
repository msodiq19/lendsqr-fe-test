'use client'
import React, { useState } from 'react'
import styles from './auth.module.scss'
import { useRouter } from 'next/navigation'


const LoginForm = () => {
    const [show, setShow] = useState(false)

    const router = useRouter()

  return (
    <form className={styles.loginForm}>
        <div>
            <input type='text' />
        </div>
        <div className={styles.passBox}>
            <input type={show ? 'text' : 'password'} />
            <span onClick={() => setShow(!show)}>{show ? 'hide' : 'show'}</span>
        </div>
        <p>Forgot Password?</p>
        <button onClick={() => router.push('/users')} className={styles.btn}>LOG IN</button>
    </form>
  )
}

export default LoginForm