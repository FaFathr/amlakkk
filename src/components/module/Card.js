import styles from "./Card.module.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { sp } from "../../utils/replaceNmber";
import Link from "next/link";
import { BiLeftArrowAlt } from "react-icons/bi";
import { icons } from "src/constants/icons";
function Card({ data: { _id, category, title, location, price } }) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icons[category]}</div>
      <p className={styles.title}>{title}</p>
      <p className={styles.location}>
        <HiOutlineLocationMarker />
        {location}
      </p>
      <span>{sp(price)} تومان</span>
      <Link href={`/buy-residential/${_id}`}>
        مشاهده آگهی
        <BiLeftArrowAlt />
      </Link>
    </div>
  );
}

export default Card;
