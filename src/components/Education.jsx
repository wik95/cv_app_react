import styles from "./education.module.css";

export default function Education({ data }) {
  return (
    <div className={styles.education}>
      <div className={styles.subtitle}>Education</div>
      <div className={styles.schoolInf}>
        <div className={styles.school}>{data.school}</div>
        <div>{data.degree}</div>
      </div>
    </div>
  );
}
