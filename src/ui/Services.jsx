import useBrowserWidth from "../hooks/useBrowserWidth";
import Carousel from "./Carousel";
import styles from "./Services.module.css";

function Services() {
  const browserWidth = useBrowserWidth();
  let slidesToShow;
  if (browserWidth > 900) {
    slidesToShow = 3;
  } else if (browserWidth > 600) {
    slidesToShow = 2;
  } else {
    slidesToShow = 1;
  }

  return (
    <section className={styles.services}>
      <div className="sectionStyles">
        <h2>
          What We{" "}
          <em>
            <strong>Do</strong>
          </em>
        </h2>

        <Carousel slidesToShow={slidesToShow}>
          <div className={styles.serviceItem}>
            <div className="imgContainer">
              <img src="/images/services/annual-maintenance.jpg" />
              <BtnBook service="Annual Maintenance" />
            </div>
            <span>Annual Maintenance Contracts</span>
          </div>
          <div className={styles.serviceItem}>
            <div className="imgContainer">
              <img src="/images/services/duct-cleaning.jpg" />
              <BtnBook service="Duct Cleaning" />
            </div>
            <span>Duct Cleaning</span>
          </div>
          <div className={styles.serviceItem}>
            <div className="imgContainer">
              <img src="/images/services/maintenance-services.webp" />
              <BtnBook service="Maintenance" />
            </div>
            <span>Maintenance Services</span>
          </div>
          <div className={styles.serviceItem}>
            <div className="imgContainer">
              <img src="/images/services/specialized-services.webp" />
              <BtnBook service="Specialized" />
            </div>
            <span>Specialized Services</span>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

function BtnBook({ service }) {
  const message = `I want to inquire about your "${service}" services.`;

  return (
    <a
    href={`https://wa.me/+971567599006?text=${encodeURIComponent(message)}`}
      target="_blank"
      className={styles.btnBook}
    >
      BOOK NOW
    </a>
  );
}

export default Services;
