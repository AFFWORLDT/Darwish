import React from "react";
import styles from "./ACDuctCleaning.module.css";
import CtaBtns from "../../ui/CtaBtns";
import Carousel from "../../ui/Carousel";
import { FaCheckCircle } from "react-icons/fa";
import Wave from "../../ui/Wave";
import { useState } from "react";
import { acfaq } from "../../utils/faqAcDuct";
import useMetaTags from "../../hooks/useMetaTags";

const ACDuctCleaning = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  function handleToggle(id) {
    if (activeFaq === id) return setActiveFaq(null);
    setActiveFaq(id);
  }

  useMetaTags(
    'AC Duct Cleaning | Apex Cleaning Dubai',
    'Breathe easier with our expert AC duct cleaning services in Dubai. Improve indoor air quality and system performance with our thorough and professional cleaning solutions.',
    'AC duct cleaning Dubai,air duct cleaning services,AC duct cleaning service'
  )

  return (
    <>
      <section className={styles.ductCleaning}>
        <div className={styles.breathe}>
          <div className={styles.acContent}>
            <div className={styles.sectionStyles}>
              <h1>
                <em>
                  <strong>Experience Fresh, Clean Air with</strong>
                </em>{" "}
                Professional AC Duct Cleaning Services in Dubai
              </h1>
              <p>
              Enhance your indoor air quality and increase your AC&apos;s efficiency.
              </p>
              <p>Trust APEX Cleaning to manage your AC duct cleaning needs in Dubai.</p>
              <div className={styles.acCounts}>
                <div className={styles.acrow}>
                  <h1>33,000+</h1>
                  <p>AC Ducts Cleaned</p>
                </div>
                <div className={styles.acrow}>
                  <h1>100%</h1>
                  <p>Eco-friendly Service</p>
                </div>
                <div className={styles.acrow}>
                  <h1>24/7</h1>
                  <p>Customer Support</p>
                </div>
              </div>
              <CtaBtns btnTelephoneColor="var(--clr-neutral-50)" />
            </div>
          </div>
          <div className={styles.acCarousel}>
            <div className={styles.sectionStyles}>
              <Carousel>
                <img
                  src="/images/services/duct-cleaning.jpg"
                  alt="Duct Cleaning"
                />
                <img
                  src="/images/services/annual-maintenance.jpg"
                  alt="Annual Maintenance"
                />
                <img
                  src="/images/services/specialized-services.webp"
                  alt="Specialized Services"
                />
                <img
                  src="/images/services/maintenance-services.webp"
                  alt="Maintenance Services"
                />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cleaningSection}>
        <div className={styles.cleaningContent}>
          <div className={styles.cleaningImage}>
            <img src="/images/services/ac-cleaning.jpg" alt="AC Cleaning" />
          </div>
          <div className={styles.cleaningText}>
            <h1>
              Why You Need{" "}
              <em>
                <strong>AC Duct Cleaning</strong>
              </em>
            </h1>
            <p>
              Have you ever been curious about what lurks inside your air ducts?
            </p>
            <p>
              You may be amazed by the discoveries we have made in air ducts
              over the years of our work. We have witnessed everything from
              toys, stuffed animals, clothing, jewelry, keys, and various other
              objects that you wouldn&apos;t expect to find in an air
              conditioning duct.
            </p>
            <p>
              APEX CLEANING provides AC duct cleaning services to help keep your
              airways free from millions of harmful pollutants that can pose
              health risks. We enable you to inhale clean air free from pollen,
              dust mites, pet dander, dust, mold, bacteria, fungi, dead insects,
              and other harmful substances.
            </p>
            <p>
              The weather conditions in the UAE have led to a common habit of
              staying indoors, causing air conditioning ducts to accumulate more
              dirt from frequent use. Our services for cleaning and sanitizing
              AC ducts effectively remove harmful buildup to enhance the AC
              unit&apos;s efficiency and indoor air quality.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.qualitySection}>
        <div className={styles.qualityContent}>
          <div className={styles.qualityText}>
            <h1>
            AC Duct Cleaning Enhances Indoor{" "}
              <em>
                <strong> Air Quality in Dubai</strong>
              </em>
            </h1>
            <p>
              The perfect conditions for bacteria growth in AC ducts are created
              by the intense heat and high humidity levels in the UAE. These
              bacteria have the potential to transform into harmful air
              contaminants capable of triggering allergies and respiratory
              illnesses.
            </p>
            <p>
              Regular AC duct quality is necessary for both homes and offices to
              maintain healthy indoor air quality, and should be performed every
              4 to 6 months. If it&apos;s been a while since you last had ac
              duct quality, consider it a signal to schedule it as soon as
              possible. Schedule a meeting with APEX CLEANING now.
            </p>
          </div>
          <div className={styles.qualityImage}>
            <img src="/images/services/air-quality.jpg" alt="AC Quality" />
          </div>
        </div>
      </section>

      {/* <section className={styles.phaseSection}>
        <div className={styles.phaseContent}>
            <div className={styles.phaseImage}>
                <Carousel>
                    <img src="/images/services/Phase1.jpg" alt="Phase1" />
                    <img src="/images/services/Phase2.jpg" alt="Phase2" />
                    <img src="/images/services/Phase3.jpg" alt="Phase3" />
                    <img src="/images/services/Phase4.jpg" alt="Phase4" />
                    <img src="/images/services/Phase5.jpg" alt="Phase5" />
                </Carousel>
            </div>
            <div className={styles.phaseText}>
            <h1>
            5 Phases of {" "}
            <em>
                <strong>AC Duct Cleaning</strong>
            </em>
            </h1>
            <p>APEX CLEANING provides expert AC duct cleaning in Dubai and the UAE. We get the job done right!</p>
            </div>
        </div>
    </section> */}

      <section className={styles.chooseSection}>
        <div className={styles.chooseContent}>
          <div className={styles.chooseText}>
            <h1>
              Why Choose APEX Cleaning for{" "}
              <em>
                <strong>AC Duct Cleaning in Dubai</strong>
              </em>
            </h1>
            <ul>
              <li>
                <FaCheckCircle className={styles.circleIcon} />
                Hassle-free booking
              </li>
              <li>
                <FaCheckCircle className={styles.circleIcon} />
                Professional technicians and qualified professionals
              </li>
              <li>
                <FaCheckCircle className={styles.circleIcon} />
                Comprehensive and top-notch AC duct cleaning services
              </li>
              <li>
                <FaCheckCircle className={styles.circleIcon} />
                24/7 customer support
              </li>
              <li>
                <FaCheckCircle className={styles.circleIcon} />
                100% customer satisfaction guaranteed
              </li>
              <li>
                <FaCheckCircle className={styles.circleIcon} />
                Modern and eco-friendly equipment
              </li>
              <li>
                <FaCheckCircle className={styles.circleIcon} />
                Quality services at a reasonable cost
              </li>
            </ul>
          </div>
          <div className={styles.chooseImage}>
            <img
              src="/images/services/why-choose-ac (2).webp"
              alt="Why choose Quality"
            />
          </div>
        </div>
      </section>

      <section className={styles.chooseSection}>
        <div className={styles.chooseContent}>
          <div className={styles.chooseImage}>
            <img
              src="/images/services/provides-ac-duct (2).webp"
              alt="Why choose Quality"
            />
          </div>
          <div className={styles.chooseText}>
            <h1>
            What APEX Cleaning Offers for{" "}
              <em>
                <strong>AC Duct Cleaning in Dubai</strong>
              </em>
            </h1>
            <p>360° Approach and Integrated Solutions for:</p>
            <ul>
              <li>
                <FaCheckCircle className={styles.circleIcon} />
                AC Cleaning
              </li>
              <li>
                <FaCheckCircle className={styles.circleIcon} />
                Mold remediation
              </li>
              <li>
                <FaCheckCircle className={styles.circleIcon} />
                Insulation Replacement
              </li>
              <li>
                <FaCheckCircle className={styles.circleIcon} />
                Mechanical Repairs
              </li>
              <li>
                <FaCheckCircle className={styles.circleIcon} />
                Energy Efficiency
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.faq}>
        <div className="sectionStyles">
          <h2>
            Frequently Asked Questions for{" "}
            <em>
              <strong>AC Duct Cleaning</strong>
            </em>
          </h2>

          <div className={styles.faqContainer}>
            {acfaq.map((item) => (
              <div className={styles.faqItem} key={item.id}>
                <p
                  className={`${styles.title} ${activeFaq === item.id ? styles.activeToggle : ""}`}
                  onClick={() => handleToggle(item.id)}
                >
                  <span>{item.title}</span>
                  {activeFaq === item.id ? <span>-</span> : <span>+</span>}
                </p>
                {activeFaq === item.id && (
                  <p className={styles.content}>{item.content}</p>
                )}
              </div>
            ))}
          </div>

          <Wave />
        </div>
      </section>
    </>
  );
};

export default ACDuctCleaning;
