import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import GetQuoteForm from "./GetQuoteForm";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="sectionStyles">
        <div className={styles.footerTop}>
          <ul>
            <li className={styles.listTitle}>Quick Links</li>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>

          <ul>
            <li className={styles.listTitle}>Services</li>
            <li>
              <Link>Duct Cleaning</Link>
            </li>
            <li>
              <Link>Annual Maintenance Contracts</Link>
            </li>
            <li>
              <Link>Water Proofing Services</Link>
            </li>
            <li>
              <Link>Maintenance Services</Link>
            </li>
            <li>
              <Link>Specialized Services</Link>
            </li>
          </ul>

          <GetQuoteForm />
        </div>

        <div className={styles.footerMiddle}>
          <div className={styles.socials}>
            <a href="https://facebook.com" target="_blank">
              <img src="/icons/facebook.svg" />
            </a>
            <a href="https://instagram.com" target="_blank">
              <img src="/icons/instagram.svg" />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <img src="/icons/linkedin.svg" />
            </a>
          </div>

          <div className={styles.timings}>
            <span>Open Hours</span>
            <span>Monday-Saturday: 9:00am - 8:00pm, Sunday: Closed</span>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>Copyright © 2024 Repairing Dubai. All rights reserved</p>
        <p>Website by AFFWORLD</p>
      </div>
    </footer>
  );
}

export default Footer;
