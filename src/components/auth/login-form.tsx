'use client'
import React, { useState } from 'react'
import styles from './auth.module.scss'
import { useRouter } from 'next/navigation'


const LoginForm = () => {
    const [show, setShow] = useState(false)

    const router = useRouter()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      router.push('/users')
    }

  return (
    <form className={styles.loginForm} onSubmit={(e) => handleSubmit(e)}>
        <div>
            <input type='text' placeholder='Email' />
        </div>
        <div className={styles.passBox}>
            <input type={show ? 'text' : 'password'} placeholder='Password' />
            <span onClick={() => setShow(!show)}>{show ? 'hide' : 'show'}</span>
        </div>
        <p>Forgot Password?</p>
        <button className={styles.btn}>LOG IN</button>
    </form>
  )
}

export default LoginForm