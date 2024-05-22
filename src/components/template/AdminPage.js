import React from 'react'
import styles from "./AdminPage.module.css"
import AdminCard from '../module/AdminCard'
function AdminPage({ profiles }) {
  return (
    <div>
    {profiles.length ? null : (
      <p className={styles.text}>هیچ آگهی در انتظار تاییدی وجود ندارد</p>
    )}
    {profiles.map((i) => (
      <AdminCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
    ))}
  </div>
  )
}

export default AdminPage