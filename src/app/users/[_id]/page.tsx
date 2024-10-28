"use client";
import Image from "next/image";
import styles from "../users.module.scss";
import { ProfileHeader } from "@/components/users/profile-header";
import { ProfileDetails } from "@/components/users/user-details";
import { UserProfile } from "@/types";
import { useRouter } from "next/navigation";

const dummyUser: UserProfile = {
  fullName: "Grace Effiom",
  userId: "LSQFF587g90",
  tier: 1,
  balance: "₦200,000.00",
  bankInfo: "9912345678/Providus Bank",
  email: "grace@gmail.com",
  phone: "07060780922",
  bvn: "07060780922",
  gender: "Female",
  maritalStatus: "Single",
  children: "None",
  residenceType: "Parent's Apartment",
  education: {
    level: "B.Sc",
    employmentStatus: "Employed",
    sector: "FinTech",
    duration: "2 years",
  },
  income: {
    officeEmail: "grace@lendsqr.com",
    monthlyRange: "₦200,000.00- ₦400,000.00",
    loanRepayment: "40,000",
  },
  socials: {
    twitter: "@grace_effiom",
    facebook: "Grace Effiom",
    instagram: "@grace_effiom",
  },
  guarantor: {
    fullName: "Debby Ogana",
    phone: "07060780922",
    email: "debby@gmail.com",
    relationship: "Sister",
  },
};

export default function UsersDetails() {
  const router = useRouter();

  return (
    <div className={styles.userDetails}>
      <div onClick={() => router.push("/users")} className={styles.back}>
        <Image src={"/assets/back.svg"} alt="back" width={16} height={16} />
        <span>Back to Users</span>
      </div>
      <div className={styles.actions}>
        <h3>User Details</h3>
        <div>
          <button className={styles.btnList}>BLACKLIST USER</button>
          <button className={styles.btnActive}>ACTIVATE USER</button>
        </div>
      </div>
      <div className={styles.container}>
        <ProfileHeader user={dummyUser} />
        <nav className={styles.nav}>
          <ul>
            <li className={styles.active}>General Details</li>
            <li>Documents</li>
            <li>Bank Details</li>
            <li>Loans</li>
            <li>Savings</li>
            <li>App and System</li>
          </ul>
        </nav>
        <ProfileDetails user={dummyUser} />
      </div>
    </div>
  );
}
