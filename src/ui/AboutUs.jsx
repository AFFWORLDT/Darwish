import styles from "./AboutUs.module.css";
import Wave from "./Wave";

function AboutUs() {
  return (
    <section className={styles.aboutUs}>
      <div className="sectionStyles">
        <div className="imgContainer">
          <img src="/images/services/ac-cleaning.jpg" />
        </div>

        <div className={styles.aboutUsContent}>
          <h2>
            Your Well-being{" "}
            <em>
              <strong>Comes First</strong>
            </em>
          </h2>

          <p>
            Founded by experts with over 20 years of experience in the UAE, Apex
            Cool Cleaning is backed by a team of skilled and dedicated
            tradesmen, each proficient in their respective fields. We are
            committed to delivering top-quality services that ensure the highest
            standards of cleanliness and customer satisfaction.
          </p>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <img src="/icons/about-us/feature-1.png" />
              <div className={styles.statContainer}>
                <span className={styles.num}>25,000+</span>
                <span className={styles.description}>AC Ducts Cleaned</span>
              </div>
            </div>
            <div className={styles.statItem}>
              <img src="/icons/about-us/feature-2.png" />
              <div className={styles.statContainer}>
                <span className={styles.num}>1,000+</span>
                <span className={styles.description}>
                  Annual Maintenance Contracts
                </span>
              </div>
            </div>
            <div className={styles.statItem}>
              <img src="/icons/about-us/feature-3.png" />
              <div className={styles.statContainer}>
                <span className={styles.num}>4.9/5</span>
                <span className={styles.description}>Google Rating</span>
              </div>
            </div>
            <div className={styles.statItem}>
              <img src="/icons/about-us/feature-4.png" />
              <div className={styles.statContainer}>
                <span className={styles.num}>1,00,000+</span>
                <span className={styles.description}>Happy Customers</span>
              </div>
            </div>
          </div>
        </div>

        <Wave />
      </div>
    </section>
  );
}

export default AboutUs;
