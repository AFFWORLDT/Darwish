import Wave from "../ui/Wave";
import styles from "./AboutPage.module.css";
import DuckCleaning from '/images/services/duct-cleaning.jpg';
import AnnualMaintenence from '/images/services/annual-maintenance.jpg';
import Furniture from '/images/services/specialized-services.webp';
import MaintenenceService from '/images/services/maintenance-services.webp';
import useMetaTags from "../hooks/useMetaTags";

function AboutPage() {
  useMetaTags(
    'About Us | Repairing Dubai',
    `Learn more about Repairing Dubai, Dubai's trusted provider of professional cleaning and maintenance services. Discover our commitment to quality, expertise, and customer satisfaction.`,
    'about Repairing Dubai,Dubai cleaning services'
  )
  return (
    <>
    <section className={styles.aboutPage}>
      <div className="sectionStyles">
      <h1>
          About{" "}
          <em>
            <strong>Us</strong>
          </em>
      </h1>
      <p>Repairing Dubai was founded in 2012 with the aim of providing convenient clean, 
        fresh, and healthy environments for both residential and commercial properties in the UAE.
      </p>
      <Wave/>
      </div>
    </section>

    <section className={styles.aboutUsPage}>
      <div className="sectionStyles">
        <div className="imgContainer">
          <img src="/images/who-we.jpg" />
        </div>

        <div className={styles.aboutUsPageContent}>
          <h2>
            Who{" "}
            <em>
              <strong>We Are</strong>
            </em>
          </h2>

          <p>Apex Cleaning Technical Services was founded in 2012 by a team of experts with over
             20 years of experience in the HVAC, Cleaning, And Maintenance Industry in the UAE.
            After achieving success in the local market, we extended our range of services to 
            meet the specific cleaning and maintenance needs of various residential, commercial,
            and industrial properties in the UAE. We specialize in four main service areas: AC, 
            Deep Cleaning, Sanitisation, and Additional Maintenance.
          </p>
          <p>We aim to deliver high standards and quality in our services, ensuring we offer 
            sustainable results and excellent value that will keep you returning. This can be 
            seen in the feedback our customers leave on Google and Facebook.
          </p>
        </div>
      </div>
    </section>

    <section className={styles.aboutService}>
        <div className={styles.sectionStyles}>
          <div className={styles.servicesContainer}>
            <div className={styles.servicesText}>
              <h2>
                What{" "}
                <em>
                  <strong>We Do</strong>
                </em>
              </h2>
              <p>
                Apex Cleaning offers expert cleaning and maintenance services for
                homes and businesses in the UAE. We offer AC repair, AC duct
                cleaning, thorough carpet, mattress, furniture, sofa and curtain
                cleaning, pest control, surface disinfection, handyman services,
                plumbing, painting, and various other yearly maintenance
                services.
              </p>
              <p>
                We adhere to rigorous protocols and methods in our services for
                various property types. In addition to carefully selecting our
                staff based on their qualifications, skills, and expertise, we
                also provide ongoing training for our technicians to enhance
                their abilities in achieving superior outcomes.
              </p>
              <p>
                We employ the most up-to-date cleaning technologies, tools, and
                products, emphasizing eco-friendly products, in alignment with
                our green principles and dedication to achieving sustainable
                outcomes.
              </p>
            </div>
            <div className={styles.services}>
              <div className={styles.serviceItem}>
                <div className={styles.imgContainer}>
                  <img src={DuckCleaning} alt="Duct Cleaning" />
                  <p>Duct Cleaning</p>
                </div>
              </div>
              <div className={styles.serviceItem}>
                <div className={styles.imgContainer}>
                  <img
                    src={AnnualMaintenence}
                    alt="Annual Maintenance Contracts"
                  />
                  <p>Annual Maintenance Contracts</p>
                </div>
              </div>
              <div className={styles.serviceItem}>
                <div className={styles.imgContainer}>
                  <img
                    src={Furniture}
                    alt="Furniture Cleaning & Home Sanitization"
                  />
                  <p>Furniture Cleaning & Home Sanitization</p>
                </div>
              </div>
              <div className={styles.serviceItem}>
                <div className={styles.imgContainer}>
                  <img
                    src={MaintenenceService}
                    alt="Maintenance Services"
                  />
                  <p>Maintenance Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    <section className={styles.aboutPageTeam}>
    <div className="sectionStyles">
      <h1>
          Our{" "}
          <em>
            <strong>Team</strong>
          </em>
      </h1>
      <p>Our team consists of skilled tradespeople in HVAC, cleaning, and maintenance, with a strong 
        foundation in qualifications, experience, and skills.
      </p>
      </div>
    </section>
    </>
  );
}

export default AboutPage;
