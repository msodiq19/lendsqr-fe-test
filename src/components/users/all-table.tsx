import React, { useState } from "react";
import Image from "next/image";
import styles from "./users.module.scss";
import { useRouter } from "next/navigation";
import FilterDropdown, { type FilterValues } from "./filter-dropdown";

const statusLabels: Record<string, string> = {
  "0": "Inactive",
  "1": "Pending",
  "2": "Active",
  "3": "Blacklisted",
};

const statusClasses: Record<string, string> = {
  "0": styles.inactive,
  "1": styles.pending,
  "2": styles.active,
  "3": styles.blacklisted,
};

type User = {
  dateJoined: string;
  name: string;
  phone: string;
  organisation: string;
  email: string;
  status: string;
  _id: string;
};

const Table = ({ data }: { data: User[] }) => {
  const [filteredData, setFilteredData] = useState<User[]>(data);
  const [filterVisible, setFilterVisible] = useState(false);
  const [moreOpen, setMoreOpen] = useState<string | null>(null);
  const router = useRouter();

  const handleFilterClick = () => {
    setFilterVisible(!filterVisible);
  };

  const toggleMore = (userId: string) => {
    setMoreOpen((prev) => (prev === userId ? null : userId));
  };

  const handleFilter = (filterValues: FilterValues) => {
    const filtered = data.filter((user) => {
      const matchesOrganization = filterValues.organization
        ? user.organisation.includes(filterValues.organization)
        : true;
      const matchesUsername = filterValues.username
        ? user.name.includes(filterValues.username)
        : true;
      const matchesEmail = filterValues.email
        ? user.email.includes(filterValues.email)
        : true;
      const matchesDate = filterValues.date
        ? new Date(user.dateJoined).toLocaleDateString() === filterValues.date
        : true;
      const matchesPhoneNumber = filterValues.phoneNumber
        ? user.phone.includes(filterValues.phoneNumber)
        : true;
      const matchesStatus = filterValues.status
        ? user.status === filterValues.status
        : true;

      return (
        matchesOrganization &&
        matchesUsername &&
        matchesEmail &&
        matchesDate &&
        matchesPhoneNumber &&
        matchesStatus
      );
    });

    setFilteredData(filtered);
    setFilterVisible(false);
  };

  const handleReset = () => {
    setFilteredData(data);
    setFilterVisible(false);
  };

  return (
    <div className={styles.tableContainer}>
      {filterVisible && (
        <FilterDropdown onFilter={handleFilter} onReset={handleReset} />
      )}

      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>
                Organization{" "}
                <Image
                  src="/assets/filter-results-button.svg"
                  alt="Filter"
                  width={12}
                  height={12}
                  onClick={handleFilterClick}
                />
              </th>
              <th>
                Username{" "}
                <Image
                  src="/assets/filter-results-button.svg"
                  alt="Filter"
                  width={12}
                  height={12}
                  onClick={handleFilterClick}
                />
              </th>
              <th>
                Email{" "}
                <Image
                  src="/assets/filter-results-button.svg"
                  alt="Filter"
                  width={12}
                  height={12}
                  onClick={handleFilterClick}
                />
              </th>
              <th>
                Phone Number{" "}
                <Image
                  src="/assets/filter-results-button.svg"
                  alt="Filter"
                  width={12}
                  height={12}
                  onClick={handleFilterClick}
                />
              </th>
              <th>
                Date Joined{" "}
                <Image
                  src="/assets/filter-results-button.svg"
                  alt="Filter"
                  width={12}
                  height={12}
                  onClick={handleFilterClick}
                />
              </th>
              <th>
                Status{" "}
                <Image
                  src="/assets/filter-results-button.svg"
                  alt="Filter"
                  width={12}
                  height={12}
                  onClick={handleFilterClick}
                />
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredData &&
              filteredData.map((user) => (
                <tr
                  key={user._id}
                  onClick={() => router.push(`/users/${user._id}`)}
                >
                  <td>{user.organisation}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    {new Date(user.dateJoined).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                    })}
                  </td>
                  <td>
                    <span
                      className={`${styles.status} ${
                        statusClasses[user.status] || styles.unknown
                      }`}
                    >
                      {statusLabels[user.status] || "Unknown"}
                    </span>
                  </td>
                  <td
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMore(user._id);
                    }}
                    className={styles.more}
                  >
                    <Image
                      src="/assets/more.svg"
                      alt="More"
                      width={16}
                      height={16}
                    />
                    {moreOpen === user._id && (
                      <div className={styles.moreDropdown}>
                        <p onClick={() => router.push(`/users/${user._id}`)}>
                          View Details
                        </p>
                        <p onClick={() => console.log(`Editing ${user.name}`)}>
                          Edit User
                        </p>
                        <p onClick={() => console.log(`Deleting ${user.name}`)}>
                          Delete User
                        </p>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
