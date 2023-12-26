import styles from "./skills.module.css";

export default function Skills({ formValues }) {
  return (
    <div className={styles.skills}>
      <div className={styles.subtitle}>Skills</div>
      <div className={styles.listCont}>
        <div id="sk1" className={styles.listEl}>
          - catching mice
        </div>
        <div id="sk2" className={styles.listEl}>
          - traching mice
        </div>
        <div id="sk3" className={styles.listEl}>
          - drinking milk
        </div>
        {formValues.map((formValue) => (
          <div className={styles.listEl}>- {formValue.name}</div>
        ))}
      </div>
    </div>
  );
}
