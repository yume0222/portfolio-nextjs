import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <a href="index.html">My Portfolio</a>
      </h1>
      <nav className={styles.mainNav}>
        <ul className={styles.mainNavList}>
          <li className={styles.mainNavItem}>
            <a href="#about" className={styles.mainNavLink}>
              about
            </a>
          </li>
          <li className={styles.mainNavItem}>
            <a href="#skill" className={styles.mainNavLink}>
              skill
            </a>
          </li>
          <li className={styles.mainNavItem}>
            <a href="#history" className={styles.mainNavLink}>
              history
            </a>
          </li>
          <li className={styles.mainNavItem}>
            <a href="#vision" className={styles.mainNavLink}>
              vision
            </a>
          </li>
          <li className={styles.mainNavItem}>
            <a href="#products" className={styles.mainNavLink}>
              products
            </a>
          </li>
          <li className={styles.mainNavItem}>
            <a href="#contact" className={styles.mainNavLink}>
              contact
            </a>
          </li>
          <li className={styles.mainNavItem}>
            <a
              href="https://github.com/yume0222"
              target="_blank"
              className={styles.mainNavLink}
            >
              <FontAwesomeIcon icon={faGithub} className="github" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
