import AuthAside from "@/components/auth/auth-aside";
import React from "react";
import styles from './layout.module.scss'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
        <AuthAside />
        {children}
    </div>
    )
  ;
}
