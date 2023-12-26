import styles from "./workexperience.module.css";

export default function WorkExperience({ data }) {
  return (
    <div className={styles.workexperience}>
      <div className={styles.subtitle}>Experience</div>
      <div className={styles.container}>
        {/* work experience 1 */}
        <div className={styles.exp1}>
          <div className={styles.pos}>{data.position}</div>
          <div className={styles.compInf}>
            <div>{data.company}</div> |<div> {data.startDate}</div> -
            <div> {data.endDate}</div>
          </div>
          <div className={styles.textSz}>{data.text2}</div>
        </div>
        {/* work experience 2 */}
        <div className={styles.exp2}>
          <div className={styles.pos}>{data.position2}</div>
          <div className={styles.compInf}>
            <div>{data.company2}</div> |<div> {data.startDate2}</div> -
            <div> {data.endDate2}</div>
          </div>
          <div className={styles.textSz}>{data.text3}</div>
        </div>
      </div>
    </div>
  );
}
