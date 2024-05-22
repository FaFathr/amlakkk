import styles from "./DashboardSidebar.module.css";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import LogoutButton from "../module/LogoutButton";
async function DashboardSidebar({ children, email, role }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile />
        {role === "ADMIN" ? "ادمین" : null}
      
        <p>{email}</p>
        <span></span>

        <Link href="/dashboard">حساب کاربری</Link>
        <Link href="/dashboard/my-profiles">اگهی های من </Link>
        <Link href="/dashboard/add">ثبت اگهی </Link>
        {role === "ADMIN" ? <Link href="/admin">در انتظار تایید</Link> : null}
        <LogoutButton />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
}

export default DashboardSidebar;
