import React, { useState } from 'react';
import styles from './users.module.scss';

export type FilterValues = {
  organization: string;
  username: string;
  email: string;
  date: string;
  phoneNumber: string;
  status: string;
};

type FilterDropdownProps = {
  onFilter: (values: FilterValues) => void;
  onReset: () => void;
};

const FilterDropdown: React.FC<FilterDropdownProps> = ({ onFilter, onReset }) => {
  const [filterValues, setFilterValues] = useState<FilterValues>({
    organization: '',
    username: '',
    email: '',
    date: '',
    phoneNumber: '',
    status: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilterValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleFilter = () => {
    onFilter(filterValues);
  };

  const handleReset = () => {
    setFilterValues({
      organization: '',
      username: '',
      email: '',
      date: '',
      phoneNumber: '',
      status: '',
    });
    onReset();
  };

  return (
    <div className={styles.filterDropdown}>
      <label>Organization</label>
      <select name="organization" value={filterValues.organization} onChange={handleChange}>
        <option value="">Select</option>
        
      </select>

      <label>Username</label>
      <input
        type="text"
        name="username"
        placeholder="User"
        value={filterValues.username}
        onChange={handleChange}
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={filterValues.email}
        onChange={handleChange}
      />

      <label>Date</label>
      <input
        type="date"
        name="date"
        value={filterValues.date}
        onChange={handleChange}
      />

      <label>Phone Number</label>
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        value={filterValues.phoneNumber}
        onChange={handleChange}
      />

      <label>Status</label>
      <select name="status" value={filterValues.status} onChange={handleChange}>
        <option value="">Select</option>
        <option value="0">Inactive</option>
        <option value="1">Pending</option>
        <option value="2">Active</option>
        <option value="3">Blacklisted</option>
      </select>

      <div className={styles.buttons}>
        <button type="button" className={styles.resetButton} onClick={handleReset}>
          Reset
        </button>
        <button type="button" className={styles.filterButton} onClick={handleFilter}>
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterDropdown;
