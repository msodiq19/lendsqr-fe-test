import React from 'react';
import styles from './users.module.scss';
import { UserProfile } from '@/types';

interface ProfileDetailsProps {
  user: UserProfile;
}

export const ProfileDetails: React.FC<ProfileDetailsProps> = ({ user }) => (
  <div className={styles.details}>
    <section className={styles.personalInfo}>
      <h3>Personal Information</h3>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label>FULL NAME</label>
          <span>{user.fullName}</span>
        </div>
        <div className={styles.field}>
          <label>PHONE NUMBER</label>
          <span>{user.phone}</span>
        </div>
        <div className={styles.field}>
          <label>EMAIL ADDRESS</label>
          <span>{user.email}</span>
        </div>
        {/* Add other personal fields */}
      </div>
    </section>

    <section className={styles.education}>
      <h3>Education and Employment</h3>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label>LEVEL OF EDUCATION</label>
          <span>{user.education.level}</span>
        </div>
        <div className={styles.field}>
          <label>EMPLOYMENT STATUS</label>
          <span>{user.education.employmentStatus}</span>
        </div>
        <div className={styles.field}>
          <label>SECTOR</label>
          <span>{user.education.sector}</span>
        </div>
        <div className={styles.field}>
          <label>DURATION</label>
          <span>{user.education.duration}</span>
        </div>
        <div className={styles.field}>
            <label>OFFICE EMAIL</label>
            <span>{user.income.officeEmail}</span>
        </div>
        <div className={styles.field}>
            <label>MONTHLY INCOME</label>
            <span>{user.income.monthlyRange}</span>
        </div>
        <div className={styles.field}>
            <label>LOAN REPAYMENT</label>
            <span>{user.income.loanRepayment}</span>
        </div>
      </div>
    </section>

    <section className={styles.socials}>
      <h3>Socials</h3>
      <div className={styles.grid}>
        {/* Social media fields */}
        <div className={styles.field}>
            <label>Twitter</label>
            <span>{user.socials.twitter}</span>
        </div>
        <div className={styles.field}>
            <label>Facebook</label>
            <span>{user.socials.facebook}</span>
        </div>
        <div className={styles.field}>
            <label>Instagram</label>
            <span>{user.socials.instagram}</span>
        </div>
      </div>
    </section>

    <section className={styles.guarantor}>
      <h3>Guarantor</h3>
      <div className={styles.grid}>
        {/* Guarantor fields */}
        <div className={styles.field}>
            <label>FULL NAME</label>
            <span>{user.guarantor.fullName}</span>
        </div>
        <div className={styles.field}>
            <label>PHONE NUMBER</label>
            <span>{user.guarantor.phone}</span>
        </div>
        <div className={styles.field}>
            <label>EMAIL ADDRESS</label>
            <span>{user.guarantor.email}</span>
        </div>
        <div className={styles.field}>
            <label>RELATIONSHIP</label>
            <span>{user.guarantor.relationship}</span>
        </div>
      </div>
    </section>
  </div>
);
