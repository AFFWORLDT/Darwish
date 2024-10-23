import { Link } from "react-router-dom";
import styles from "./ServicesMobile.module.css";
import { useState } from "react";

function ServicesMobile({ handleNav }) {
  const [isServicesActive, setIsServicesActive] = useState(false);

  function handleServices() {
    if (isServicesActive) setIsServicesActive(false);
    handleNav();
  }

  return (
    <div className={styles.servicesMobile}>
      <p
        onClick={() => setIsServicesActive(!isServicesActive)}
        className={`${styles.toggleServices} ${isServicesActive ? styles.activeToggle : ""}`}
      >
        <span>Our Services</span>
        <img src="/icons/chevron-down.svg" />
      </p>
      {isServicesActive && (
        <div className={styles.lists}>
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
              <Link onClick={handleServices}  to={"/services/Annual-Maintenance-Contracts"}>Annual Maintenance Contracts</Link>
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
                <Link onClick={handleServices}  to={"/services/SpecializedServices/Post-construction-service"}>Post Construction Cleaning</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServicesMobile;
