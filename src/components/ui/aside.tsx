import Image from "next/image";
import menuData from "../../utils/menuData.json";
import styles from "./ui.module.scss";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.organisation}>
        <span>
          <Image src="/assets/briefcase.svg" alt="briefcase" width={12} height={12} />
        </span>
        <a href="#">Switch Organisation</a>
        <span>
          <Image src="/assets/arrow-down.svg" alt="arrow-down" width={12} height={12} />
        </span>
      </div>
      <a href="#" className={styles.dashboard}>
        <span><Image src={'/assets/home.svg'} alt='home' width={14} height={14} /></span>
        <span>Dashbard</span>
      </a>
      <div className={styles.section}>
        <h2>Customers</h2>
        <ul>
          {menuData.customers.map((item, index) => (
            <li key={index}>
              <Image src={item.icon} alt={item.name} height={16} width={16} />
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.section}>
        <h2>Businesses</h2>
        <ul>
          {menuData.businesses.map((item, index) => (
            <li key={index}>
              <Image src={item.icon} alt={item.name} height={16} width={16} />
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.section}>
        <h2>Settings</h2>
        <ul>
          {menuData.settings.map((item, index) => (
            <li key={index}>
              <Image src={item.icon} alt={item.name} height={16} width={16} />
              {item.name}
          </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
