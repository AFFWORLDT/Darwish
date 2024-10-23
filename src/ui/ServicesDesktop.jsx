import styles from "./ServicesDesktop.module.css";
import { Link } from "react-router-dom";
import useOutsideClick from "../hooks/useOutsideClick";
import CtaBtns from "./CtaBtns";

function ServicesDesktop({ isServicesActive, setIsServicesActive }) {
  const outsideClickRef = useOutsideClick(() => setIsServicesActive(false));

  function handleServices() {
    if (isServicesActive) setIsServicesActive(false);
  }

  return (
    <div
      ref={outsideClickRef}
      className={`${styles.servicesDesktop} ${isServicesActive ? styles.servicesActive : ""}`}
    >
      <div className={styles.lists}>
        <div className={styles.listCol}>
          <div className={styles.listItem}>
            <span className={styles.title}>Duct Cleaning</span>
            <ul>
              <li>
                <Link onClick={handleServices} to={"/services/DuctCleaning/ac-duct-cleaning"}>
                  AC Duct Cleaning & Sanitization
                </Link>
              </li>
              <li>
                <Link onClick={handleServices} to={"/services/DuctCleaning/kitchen-cleaning"}>
                  Kitchen Exhaust & Hood Cleaning
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.listItem}>
            <span className={styles.title}>
              <Link onClick={handleServices} to={"/services/Annual-Maintenance-Contracts"}>Annual Maintenance Contracts</Link>
            </span>
          </div>
          <div className={styles.listItem}>
            <span className={styles.title}>
              <Link onClick={handleServices}>Water Proofing Services</Link>
            </span>
          </div>
          <div className={styles.listItem}>
            <span className={styles.title}>
              <Link onClick={handleServices} to={"/services/Interior-Fit-Out"}>Fit-Out & Turnkey Services</Link>
            </span>
          </div>
        </div>

        <div className={styles.listCol}>
          <div className={styles.listItem}>
            <span className={styles.title}>Maintenance Services</span>
            <ul>
              <li>
                <Link onClick={handleServices} to={"/services/MaintenanceServices/Plumbing-service"}>Plumbing Services</Link>
              </li>
              <li>
                <Link onClick={handleServices} to={"/services/MaintenanceServices/Painting-service"}>Painting Services</Link>
              </li>
              <li>
                <Link onClick={handleServices} to={"/services/MaintenanceServices/Electric-service"}>Electric Services</Link>
              </li>
              <li>
                <Link onClick={handleServices} to={"/services/MaintenanceServices/Handyman-service"}>Handyman Services</Link>
              </li>
            </ul>
          </div>
          <div className={styles.listItem}>
            <span className={styles.title}>Specialized Services</span>
            <ul>
              <li>
                <Link onClick={handleServices} to={"/services/SpecializedServices/Watertank-service"}>
                  Water Tank Cleaning Services
                </Link>
              </li>
              <li>
                <Link onClick={handleServices} to={"/services/SpecializedServices/Pest-control-service"}>Pest Control</Link>
              </li>
              <li>
                <Link onClick={handleServices} to={"/services/SpecializedServices/Mold-remediation-service"}>Mold Remediation</Link>
              </li>
              <li>
                <Link onClick={handleServices} to={"/services/SpecializedServices/Deep-cleaning-service"}>Deep Cleaning</Link>
              </li>
              <li>
                <Link onClick={handleServices} to={"/services/SpecializedServices/Post-construction-service"}>Post Construction Cleaning</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.navCta}>
        <h2>
          Looking for the best{" "}
          <em>
            <strong>Deep Cleaning Service?</strong>
          </em>
        </h2>

        <p>Call us or make an online inquiry for a quick cost estimate.</p>

        <CtaBtns btnTelephoneColor="#f7f7f7" flexDirection="column" />
      </div>
    </div>
  );
}

export default ServicesDesktop;
