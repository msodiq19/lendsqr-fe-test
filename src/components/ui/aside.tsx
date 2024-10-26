import menuData from "../../utils/menuData.json";
import styles from "./ui.module.scss";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
        
      <div className={styles.section}>
        <h2>Customers</h2>
        <ul>
          {menuData.customers.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.section}>
        <h2>Businesses</h2>
        <ul>
          {menuData.businesses.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.section}>
        <h2>Settings</h2>
        <ul>
          {menuData.settings.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
