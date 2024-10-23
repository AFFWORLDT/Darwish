import React from "react";
import styles from "./KitchenCleaning.module.css";
import { useState } from "react";
import CtaBtns from "../../ui/CtaBtns";
import Carousel from "../../ui/Carousel";
import { FaCheckCircle } from "react-icons/fa";
import { faqKitchen } from "../../utils/faqKitchenData";
import Wave from "../../ui/Wave";
import useMetaTags from "../../hooks/useMetaTags";

const KitchenCleaning = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  function handleToggle(id) {
    if (activeFaq === id) return setActiveFaq(null);
    setActiveFaq(id);
  }

  useMetaTags(
    'Kitchen Cleaning | Apex Cleaning Dubai',
    `Get a spotless kitchen with Apex Cool Cleaning's expert kitchen cleaning services in Dubai. Our thorough and professional team ensures every corner is clean and hygienic for a fresh, healthy environment.`,
    'kitchen cleaning Dubai,professional kitchen cleaning,Apex Cool Cleaning'
  )
  return (
    <>
      <section className={styles.kitchenCleaning}>
        <div className={styles.kitchenClean}>
          <div className={styles.kitchenContent}>
            <div className={styles.sectionStyles}>
              <h1>
              We Make a Lasting{" "}
              <em>
                  <strong>Impact</strong>
                </em>  with Our {" "}
                <em>
                  <strong>Cleaning!</strong>
                </em>
              </h1>
              <p>Streamlining Your Kitchen Hassles</p>
              <p>Exhaust & Hood Cleaning – Contact Us Today!</p>
              <div className={styles.kitchenCounts}>
                <div className={styles.kitchenrow}>
                  <h1>100%</h1>
                  <p>Eco-friendly Service</p>
                </div>
                <div className={styles.kitchenrow}>
                  <h1>24/7</h1>
                  <p>Customer Support</p>
                </div>
              </div>
              <CtaBtns btnTelephoneColor="var(--clr-neutral-50)" />
            </div>
          </div>
          <div className={styles.kitchenCarousel}>
            <div className={styles.sectionStyles}>
              <Carousel>
                <img
                  src="/images/services/Kitchen-Cleaning01.webp"
                  alt="Kitchen Cleaning 1"
                />
                <img
                  src="/images/services/Kitchen-Cleaning02.webp"
                  alt="Kitchen Cleaning 2"
                />
                <img
                  src="/images/services/Banner_Kitchen-hood-1.jpg"
                  alt="Kitchen Cleaning 3"
                />
                <img
                  src="/images/services/Banner_Kitchen-hood2.jpg"
                  alt="Kitchen Cleaning 4"
                />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.wedoSection}>
        <div className={styles.wedoContent}>
          <div className={styles.wedoText}>
            <h1>
              What{" "}
              <em>
                <strong>We Do</strong>
              </em>
            </h1>
            <p>
              Regularly cleaning the exhaust in your kitchen is crucial for
              upkeep and cleanliness. Failing to clean them can result in grease
              accumulation, raising the risk of fires and potentially causing
              noncompliance in commercial kitchen settings.
            </p>
            <br />
            <p>
              Through years of industry experience, Apex Cleaning has refined hood
              cleaning techniques for long-lasting, dependable results. Our
              proven techniques for cleaning kitchen exhausts and hoods ensure
              enhanced efficiency, safety, and comfort in your home or
              commercial kitchen, providing peace of mind.
            </p>
          </div>
          <div className={styles.wedoImage}>
            <img
              src="/images/services/What_We_Do_Kitchen-hood-1.webp"
              alt="What we do"
            />
          </div>
        </div>
      </section>

      <section className={styles.worksSection}>
        <div className={styles.worksContent}>
          <div className={styles.worksImage}>
            <img
              src="/images/services/How-It-Works_Kitchen-hood-1.jpg"
              alt="How it works"
            />
          </div>
          <div className={styles.worksText}>
            <h1>
              How It{" "}
              <em>
                <strong>Works</strong>
              </em>
            </h1>
            <div className={styles.carouselWrapper}>
              <Carousel>
                <div className={styles.carouselItem}>
                  <h1>Step 01</h1>
                  <p>Inspect The Exhaust System</p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 02</h1>
                  <p>Shut Off The Exhaust Fan</p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 03</h1>
                  <p>Prep The Kitchen</p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 04</h1>
                  <p>
                    Shut Off All Stove And Appliance Pilot Lights And Gas Valves
                  </p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 05</h1>
                  <p>Start The Vent Hood Cleaning Process </p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 06</h1>
                  <p>Manually Scrap Problem Areas </p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 07</h1>
                  <p>
                    After Grease Is Removed From The Roof, The Exhaust Hood Is
                    Cleaned From The Bottom Up
                  </p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 08</h1>
                  <p>Polish The Hood</p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 09</h1>
                  <p>Re-Install Filters And Inspect The System</p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 10</h1>
                  <p>Apply The Certification Sticker</p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 11</h1>
                  <p>Clean The Kitchen</p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 12</h1>
                  <p>Post Cleaning Inspection</p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.chooseSection}>
        <div className={styles.chooseContent}>
          <div className={styles.chooseText}>
            <h1>
              Why{" "}
              <em>
                <strong>Apex Cool Cleaning?</strong>
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
                100% customer satisfaction guaranteed
              </li>
              <li>
                <FaCheckCircle className={styles.circleIcon} />
                Best Quality & Eco-friendly Equipment
              </li>
              <li>
                <FaCheckCircle className={styles.circleIcon} />
                Quality services at a reasonable cost
              </li>
              <li>
                <FaCheckCircle className={styles.circleIcon} />
                Qualified Professionals
              </li>
              <li>
                <FaCheckCircle className={styles.circleIcon} />
                Modern Equipment
              </li>
              <li>
                <FaCheckCircle className={styles.circleIcon} />
                Round-the-clock Support
              </li>
              <li>
                <FaCheckCircle className={styles.circleIcon} />
                360° Approach And Integrated Solutions For Cleaning, Mold
                Remediation, Insulation Replacement, Mechanical Repairs, And
                Energy Efficiency.
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

      <section className={styles.wedoSection}>
        <div className={styles.wedoContent}>
          <div className={styles.wedoText}>
            <h1>The Unknown Risk Of Uncleaned Hoods & Exhausts </h1>
            <p>
              Although often overlooked, the kitchen exhaust or hood can quickly
              accumulate dirt, dust, grease, and grime if not cleaned regularly.
              It not only impacts the range hood&apos;s performance and
              efficiency but also provides an ideal environment for dangerous
              microorganisms such as mold and bacteria to thrive. This leads to
              inadequate indoor air flow and raises health hazards.
            </p>
            <br />
            <p>
              If grease accumulates in exhaust systems, it can lead to extractor
              malfunctions, which results in decreased kitchen airflow and
              creates optimal conditions for fires to occur.
            </p>
            <br />
            <p>
              When was the most recent time you cleaned your kitchen exhaust or
              hood? Contact us immediately!
            </p>
          </div>
          <div className={styles.wedoImage}>
            <img
              src="/images/services/Fact_Kitchen-Cleaning (2).jpg"
              alt="Kitchen Cleaning"
            />
          </div>
        </div>
      </section>

      <section className={styles.faq}>
        <div className="sectionStyles">
          <h2>
            Frequently Asked Questions for{" "}
            <em>
              <strong>Kitchen Cleaning</strong>
            </em>
          </h2>

          <div className={styles.faqContainer}>
            {faqKitchen.map((item) => (
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

export default KitchenCleaning;
