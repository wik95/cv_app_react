import styles from "./contact.module.css";
import contact from "../assets/contact.svg";
import address from "../assets/address.svg";
import phone from "../assets/phone.svg";
import rocket from "../assets/rocket.svg";

export default function Contact({ data }) {
  return (
    <div className={styles.contact}>
      <div className={styles.subtitle}>Contact Information</div>
      <div>
        <div className={styles.top}>
          <div className={styles.adress}>
            <img className={styles.icons} src={address}></img>
            {data.adress}
          </div>
          <div className={styles.email}>
            <img className={styles.icons} src={contact}></img>
            {data.email}
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.phN}>
            <img className={styles.icons} src={phone}></img>
            {data.phoneNumber}
          </div>
          <div className={styles.portfolio}>
            <img className={styles.icons} src={rocket}></img>
            {data.portfolio}
          </div>
        </div>
      </div>
    </div>
  );
}
