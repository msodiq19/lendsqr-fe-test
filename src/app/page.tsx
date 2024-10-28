
import Navbar from "@/components/ui/navbar";
import styles from "./page.module.scss";
import Sidebar from "@/components/ui/aside";
import UsersPage from "./users/page";

export default function Home() {
  return (
    <div className=''>
        <Navbar />
        <div className={styles.layout}>
            <Sidebar />
            <UsersPage />
        </div>
    </div>
  );
}
