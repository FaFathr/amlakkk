import CategoryCard from "../module/CategoryCard";
import styles from "./HomePage.module.css";
import { FiCircle } from "react-icons/fi";
import { FaCity } from "react-icons/fa";
import {cities ,services ,categories} from "src/constants/strings"
function HomePage() {
 
 
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.desc}>
          <h1>سامانه خرید و اجاره ملک</h1>
          <ul>
            {services.map((i, index) => (
              <li key={index}>
                <FiCircle />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.categories}>
      {Object.keys(categories).map((i) => (
          <CategoryCard key={i} title={categories[i]} name={i} />
        ))}
      </div>
      <div className={styles.city}>
        <h3>شهر های پر بازدید</h3>
        <ul>
          {cities.map((i, index) => (
            <li key={index}>
              <FaCity />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
