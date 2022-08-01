import styles from "./navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <h2 className={styles.logoElementSmall}>C</h2>
          <h2 className={styles.logoElement}>V</h2>
          <h2 className={styles.logoElementSmall}>A</h2>
          <h2 className={styles.logoElementSmall}>I</h2>
          <h2 className={styles.logoElementSmall}>D</h2>
          <h2 className={styles.logoElementSmall}>E</h2>
        </div>

        <div className={styles.linkContainer}>
          <ul className={styles.linkWrapper}>
            <li>
              <a className={styles.link}>build CV</a>
            </li>
            <li>
              <a className={styles.link}>about</a>
            </li>
            <li>
              <a className={styles.link}>contact</a>
            </li>
            <li>
              <a className={styles.link}>login</a>
            </li>
            <div className={styles.profileImageWrapper}>
              <Image
                className={styles.profileImg}
                src="/images/avatar.jpg"
                alt="avatar"
                width={35}
                height={35}
              />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
