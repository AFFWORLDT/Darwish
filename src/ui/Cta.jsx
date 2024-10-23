import styles from "./Cta.module.css";
import CtaBtns from "./CtaBtns";
import Wave from "./Wave";

function Cta() {
  return (
    <section className={styles.cta}>
      <div className="sectionStyles">
        <h2>
          Cleaner Air{" "}
          <em>
            <strong>Healthier Home</strong>
          </em>
        </h2>
        <p>
          Our HVAC cleaning service reduces the risk of indoor air pollution
          that is the leading cause of respiratory allergies in the UAE.
        </p>
        <CtaBtns center={true} />
        <Wave />
      </div>
    </section>
  );
}

export default Cta;
