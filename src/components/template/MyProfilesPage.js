
import styles from "./MyProfilesPage.module.css";
import DashBoardCard from '../module/DashBoardCard';
function MyProfilesPage({profiles}) {
    console.log(profiles)
  return (
    <div>
      {profiles.length ? null : (
        <p className={styles.text}>هیچ آگهی ثبت نشده است</p>
      )}
      {profiles.map((i) => (
        <DashBoardCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
      ))}
    </div>
  )
}

export default MyProfilesPage