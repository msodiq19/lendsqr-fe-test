"use client";
import Cards from "@/components/users/cards";
import styles from "./users.module.scss";
import Table from "@/components/users/all-table";
import { useEffect, useState } from "react";

export default function UsersPage() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className={styles.users}>
      <h2>Users</h2>
      <div className={styles.cards}>
        <Cards icon="/assets/users-all.svg" title="USERS" amount={"2,453"} />
        <Cards
          icon="/assets/users-active.svg"
          title="ACTIVE USERS"
          amount={"2,453"}
        />
        <Cards
          icon="/assets/users-loan.svg"
          title="USERS WITH LOANS"
          amount={"12,453"}
        />
        <Cards
          icon="/assets/users-savings.svg"
          title="USERS WITH SAVINGS"
          amount={"102,453"}
        />
      </div>
      {loading ? <p>Loading data...</p> : <Table data={userData} />}
    </div>
  );
}
