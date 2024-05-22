import React from 'react'
import styles from "./SideBar.module.css"
import Link from "next/link";
import { HiFilter } from "react-icons/hi";
import { categories } from 'src/constants/strings';

function Sidebar() {
  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
        دسته بندی
      </p>
      <Link href="/buy-residential">همه</Link>
      {Object.keys(categories).map((i) => (
        <Link
          href={{
            pathname: "/buy-residential",
            query: { category: i },
          }}
        >
          {categories[i]}
        </Link>
      ))}
    </div>
  )
}

export default Sidebar