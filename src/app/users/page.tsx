"use client";
import Cards from "@/components/users/cards";
import styles from "./users.module.scss";
import Table from "@/components/users/all-table";
import { useEffect, useState } from "react";
import Pagination from "@/components/users/pagination";

export default function UsersPage() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://671cc43f09103098807b2157.mockapi.io/api/v1/users"
        );
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Calculate total items for pagination
  const totalItems = userData.length;

  // Get the data for the current page
  const paginatedData = userData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className={styles.users}>
      <h2>Users</h2>
      <div className={styles.cards}>
        <Cards icon="/assets/users-all.svg" title="USERS" amount={"2,453"} />
        <Cards icon="/assets/users-active.svg" title="ACTIVE USERS" amount={"2,453"} />
        <Cards icon="/assets/users-loan.svg" title="USERS WITH LOANS" amount={"12,453"} />
        <Cards icon="/assets/users-savings.svg" title="USERS WITH SAVINGS" amount={"102,453"} />
      </div>
      
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <Table data={paginatedData} />
      )}

      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </div>
  );
}
