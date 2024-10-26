import React from "react";
import Logo from "../ui/logo";
import Image from "next/image";
import styles from './auth.module.scss'

const AuthAside = () => {
  return (
    <div className={styles.authAside}>
        <div className={styles.logo}>
            <Logo />
        </div>
      <div>
        <Image
          src={"/assets/signin-img.svg"}
          alt="signin-svg"
          height={400}
          width={500}
        />
      </div>
    </div>
  );
};

export default AuthAside;
