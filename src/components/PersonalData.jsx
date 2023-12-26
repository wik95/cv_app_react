import styles from "./personaldata.module.css";

export default function PersonalData({ data, file, cat }) {
  return (
    <div className={styles.personal}>
      <div className={styles.head}>
        <div>
          <div className={styles.fullName}>
            <div>{data.firstName}</div>
            <div>{data.lastName}</div>
          </div>
          <div className={styles.title}> {data.titleName}</div>
        </div>
        <div className={styles.image}>
          <img id="defaultImg" src={cat} />
          <img src={file} />
        </div>
      </div>
      <div className={styles.textBox}>{data.text}</div>
    </div>
  );
}
