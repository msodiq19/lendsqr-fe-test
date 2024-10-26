import Sidebar from "@/components/ui/aside";
import Navbar from "@/components/ui/navbar";
import React from "react";
import styles from './users.module.scss'

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        <Navbar />
        <div className={styles.layout}>
            <Sidebar />
            {children}
        </div>
    </div>
  );
}
