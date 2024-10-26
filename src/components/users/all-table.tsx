import React from 'react';
import Image from 'next/image';
import styles from './users.module.scss';
import { useRouter } from 'next/navigation';

const statusLabels: Record<string, string> = {
  '0': 'Inactive',
  '1': 'Pending',
  '2': 'Active',
  '3': 'Blacklisted',
};

const statusClasses: Record<string, string> = {
  '0': styles.inactive,
  '1': styles.pending,
  '2': styles.active,
  '3': styles.blacklisted,
};

type User = {
  dateJoined: string;
  name: string;
  phone: string;
  organisation: string;
  email: string;
  status: string;
  id?: string;
  _id?: string;
};

const Table = ({ data }: { data: User[] }) => {
    const router = useRouter()
  return (
    <div className={styles.table}>
      <table>
        <thead>
          <tr>
            <th>
              Organization <Image src="/assets/filter-results-button.svg" alt="Filter" width={12} height={12} />
            </th>
            <th>
              Username <Image src="/assets/filter-results-button.svg" alt="Filter" width={12} height={12} />
            </th>
            <th>
              Email <Image src="/assets/filter-results-button.svg" alt="Filter" width={12} height={12} />
            </th>
            <th>
              Phone Number <Image src="/assets/filter-results-button.svg" alt="Filter" width={12} height={12} />
            </th>
            <th>
              Date Joined <Image src="/assets/filter-results-button.svg" alt="Filter" width={12} height={12} />
            </th>
            <th>
              Status <Image src="/assets/filter-results-button.svg" alt="Filter" width={12} height={12} />
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((user) => (
            <tr key={user.id || user._id} onClick={() => router.push(`/users/${user.id}`)}>
              <td>{user.organisation}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{new Date(user.dateJoined).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' })}</td>
              <td>
                <span className={`${styles.status} ${statusClasses[user.status] || styles.unknown}`}>
                  {statusLabels[user.status] || 'Unknown'}
                </span>
              </td>
              <td>
                <Image src="/assets/more.svg" alt="More" width={16} height={16} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
