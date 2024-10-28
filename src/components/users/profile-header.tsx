import React from 'react';
import styles from './users.module.scss';
import { UserProfile } from '@/types';
import Image from 'next/image';

interface ProfileHeaderProps {
  user: UserProfile;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user }) => (
  <div className={styles.header}>
    <div className={styles.userInfo}>
      <div className={styles.avatar}>
        <span className={styles.initials}>
          {user.fullName.split(' ').map(n => n[0]).join('')}
        </span>
      </div>
      <div className={styles.details}>
        <h2>{user.fullName}</h2>
        <span className={styles.userId}>{user.userId}</span>
      </div>
    </div>
    <div className={styles.tierInfo}>
      <span>User&apos;s Tier</span>
      <div className={styles.stars}>
        {[...Array(3)].map((_, i) => (
          <span key={i} className={i < user.tier ? styles.active : ''}>
            <Image src={'/assets/star-empty.svg'} alt='star' height={14} width={14} />
          </span>
        ))}
      </div>
    </div>
    <div className={styles.balance}>
      <h3>{user.balance}</h3>
      <span>{user.bankInfo}</span>
    </div>
  </div>
);
