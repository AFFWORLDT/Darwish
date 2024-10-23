import styles from "./DeepCleaning.module.css";
import CtaBtns from "../../ui/CtaBtns";
import Carousel from "../../ui/Carousel";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Wave from "../../ui/Wave";
import { deepcleanfaq } from "../../utils/faqDeepCleaning";
import useMetaTags from "../../hooks/useMetaTags";

const DeepCleaning = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  function handleToggle(id) {
    if (activeFaq === id) return setActiveFaq(null);
    setActiveFaq(id);
  }

  useMetaTags(
    'Deep Cleaning | Apex Cleaning Dubai',
    'Experience top-to-bottom cleanliness with Apex Cool Cleaning’s deep cleaning services in Dubai. Our thorough and professional cleaning ensures a spotless, healthy environment.',
    'deep cleaning Dubai,professional deep cleaning,Apex Cool Cleaning'
  )

    return (
        <>
            <section className={styles.deepS}>
                <div className={styles.deepCleaning}>
                    <div className={styles.deepCleanContent}>
                        <div className={styles.sectionStyles}>
                            <h1>
                            Looking for a Safe, Disease-Free, and {" "}
                                <em>
                                    <strong>Happy Home?</strong>
                                </em>
                               
                            </h1>
                            <p>We Offer Top-Tier Deep Cleaning   </p> 
                            <p>Services That Ensure Every Spot in</p>  
                            <p> Your Home Is Covered.</p>                          
                            <div className={styles.deepCleanCounts}>
                                <div className={styles.deepCleanrow}>
                                    <h1>100%</h1>
                                    <p>Eco-friendly Service</p>
                                </div>
                                <div className={styles.deepCleanrow}>
                                    <h1>24/7</h1>
                                    <p>Customer Support</p>
                                </div>
                            </div>
                            <CtaBtns />
                        </div>
                    </div>
                    <div className={styles.deepCleanCarousel}>
                        <div className={styles.sectionStyles}>
                            <Carousel>
                                <img src="/images/services/deepcleaning 01.jpg" alt="Deep clenaing" />
                                <img src="/images/services/deepcleaning 02.jpg" alt="Deep clenaing" />
                                <img src="/images/services/deepcleaning 03.jpg" alt="Deep clenaing" />
                                <img src="/images/services/deepcleaning 04.avif" alt="Deep clenaing" />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>

      <section className={styles.wedoDeepSection}>
        <div className={styles.wedoDeepContent}>
          <div className={styles.wedoDeepText}>
            <h1>
              What{" "}
              <em>
                <strong>We Do</strong>
              </em>
            </h1>
            <p>
            Struggling to maintain a clean, pleasant, and disease-free home despite your best efforts? The issue may lie in the areas you overlook—hard-to-reach spots or places you consider less important. Routine cleaning often involves just mopping floors, vacuuming, dusting visible surfaces, and removing trash.
            </p>
            <br />
            <p>
            We take cleaning to the next level by targeting deep-seated dirt throughout your home using advanced equipment, technology, and products. Our deep cleaning services include thorough sanitization and disinfection of surfaces to foster a healthier environment.
            </p>          
          </div>
          <div className={styles.wedoDeepImage}>
            <img
              src="/images/services/What_We_Do_Deepcleaning.avif"
              alt="What we do"
            />
          </div>
        </div>
      </section>

      <section className={styles.worksDeepSection}>
        <div className={styles.worksDeepContent}>
          <div className={styles.worksDeepImage}>
            <img
              src="/images/services/How-It-Works_Deepcleaning.avif"
              alt="How it works"
            />
          </div>
          <div className={styles.worksDeepText}>
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
                  <h3>Pre-Inspection</h3>
                  <p>
                  We begin by inspecting the areas, places, or rooms you need deep cleaning. In this step, if we feel anything needs repair or replacement to avoid health hazards, we recommend them here. 
                                    </p>                
                  </div>
                <div className={styles.carouselItem}>
                  <h1>Step 02</h1>
                  <h3>Analyzing Best Treatment</h3>
                  <p>
                  Once we go through all the spaces, we analyze the best way to clean them depending on nature or other sensitive areas. Under this step, we also plan the order to clean the spaces efficiently. 
                  </p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 03</h1>
                  <h3>Use Of Proper Methods & Techniques </h3>
                  <p>
                  Finally, we sort out the best method and products that need to be used for given spaces and work on the planned order. 
                                    </p>
                </div>
                
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.chDeepSection}>
        <div className={styles.chDeepContent}>
          <div className={styles.chDeepText}>
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
                Professional Technicians
              </li>
              <li>
                <FaCheckCircle className={styles.circleIcon} />
                Comprehensive And Quality Hvac Service
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
                360° Approach And Integrated Solutions For Cleaning, Deep
                Remediation, Insulation Replacement, Mechanical Repairs, And
                Energy Efficiency.
              </li>
            </ul>
          </div>
          <div className={styles.chDeepImage}>
            <img
              src="/images/services/why-choose-ac (2).webp"
              alt="Why chPest Quality"
            />
          </div>
        </div>
      </section>

      <section className={styles.profSection}>
        <div className={styles.profContent}>
          <div className={styles.profText}>
            <h1>The Most Overlooked Areas in Your House Accumulate the Most Dirt</h1>
            <p>
            In our busy lives, we often neglect certain areas of our homes, deeming them less important. Unfortunately, this is where many homeowners go wrong. The most overlooked spots in a house tend to collect the most dirt, bacteria, and germs, compromising cleanliness, hygiene, and air quality, and potentially leading to health issues.
            </p>
            <p>
            Transform your home with our deep cleaning services. Call us now to create a positive atmosphere for a clean, happy, and healthy living environment.
            </p>        <br />
          </div>
          <div className={styles.profImage}>
            <img
              src="/images/services/Facts_Deepcleaning.avif"
              alt="Kitchen Cleaning"
            />
          </div>
        </div>
      </section>

    <section className={styles.faq}>
        <div className="sectionStyles">
          <h2>
            Frequently Asked{" "}
            <em>
              <strong> Questions </strong>
            </em>
          </h2>

          <div className={styles.faqContainer}>
            {deepcleanfaq.map((item) => (
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

export default DeepCleaning;
