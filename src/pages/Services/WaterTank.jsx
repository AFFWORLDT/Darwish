import styles from "./WaterTank.module.css";
import CtaBtns from "../../ui/CtaBtns";
import Carousel from "../../ui/Carousel";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Wave from "../../ui/Wave";
import { waterfaq } from "../../utils/faqWaterTank";
import useMetaTags from "../../hooks/useMetaTags";

const WaterTank = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  function handleToggle(id) {
    if (activeFaq === id) return setActiveFaq(null);
    setActiveFaq(id);
  }

  useMetaTags(
    'Water Tank Cleaning Service | Apex Cleaning Dubai',
    'Apex Cool Cleaning provides expert water tank cleaning services in Dubai. Our thorough cleaning ensures your water tank is hygienic and free from contaminants, ensuring safe and clean water.',
    'water tank cleaning Dubai,professional tank cleaning,water tank sanitation,Apex Cool Cleaning'
  )

    return (
        <>
            <section className={styles.waterTankS}>
                <div className={styles.waterTank}>
                    <div className={styles.waterTContent}>
                        <div className={styles.sectionStyles}>
                            <h1>
                            Pure Water Starts with a {" "}
                                <em>
                                    <strong>Clean Tank!</strong>
                                </em>
                               
                            </h1>
                            <p>Revolutionizing Tank Cleaning with </p> 
                            <p> Unforgettable Precision. Call Us</p>
                            <p>Now to See How It’s Done!</p>
                            
                            <div className={styles.waterTCounts}>
                                <div className={styles.waterTrow}>
                                    <h1>100%</h1>
                                    <p>Eco-friendly Service</p>
                                </div>
                                <div className={styles.waterTrow}>
                                    <h1>24/7</h1>
                                    <p>Customer Support</p>
                                </div>
                            </div>
                            <CtaBtns />
                        </div>
                    </div>
                    <div className={styles.waterTCarousel}>
                        <div className={styles.sectionStyles}>
                            <Carousel>
                                <img src="/images/services/watertank 01.jpg" alt="waterT" />
                                <img src="/images/services/watertank 02.jpg" alt="Water" />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>

      <section className={styles.wedoTankSection}>
        <div className={styles.wedoTankContent}>
          <div className={styles.wedoTankText}>
            <h1>
              What{" "}
              <em>
                <strong>We Do</strong>
              </em>
            </h1>
            <p>
            At Apex Cleaning, we understand that maintaining clean water tanks is not only a legal requirement but also crucial for health and safety. We offer professional, reliable, and cost-effective water tank cleaning services for a range of systems, from small residential tanks to large commercial systems in the UAE.

            </p>
            <br />
            <p>
            Our team consists of carefully selected tank cleaners equipped with the latest cleaning technology and tools. Our services are continually updated to comply with the latest health and safety guidelines, ensuring the highest standards of quality and safety to prevent contamination and keep your tank in excellent condition for longer.

            </p>
          
          </div>
          <div className={styles.wedoTankImage}>
            <img
              src="/images/services/What_Water_Tank_Cleaning.jpg"
              alt="What we do"
            />
          </div>
        </div>
      </section>

      <section className={styles.worksTankSection}>
        <div className={styles.worksTankContent}>
          <div className={styles.worksTankImage}>
            <img
              src="/images/services/How-It-Works_WaterTank-1.jpg"
              alt="How it works"
            />
          </div>
          <div className={styles.worksTankText}>
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
                  <h3>Risk Assessment</h3>
                  <p>
                  We start by thoroughly assessing the water tank and surrounding area to understand the cleaning approach. 
                  </p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 02</h1>
                  <h3>Draining</h3>
                  <p>
                  Both domestic and commercial water tank cleaning requires the existing water to be drained and cleared of any accumulated contaminant deposits that have built up in the water tank.
                  </p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 03</h1>
                  <h3>Analyzing A Service Plan</h3>
                  <p>
                  Our water tank cleaning process is customized according to the size, type, and complexity of the tank, the surrounding property, and the entire water system involved. 
                  </p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 04</h1>
                  <h3>Use Of Suitable Method</h3>
                  <p>
                  A standard cleaning method includes scraping, sandblasting, and wire brushing, completed by sanitizing and disinfecting. All our cleaning methods are done using the latest disinfection methods, techniques and harm-free chemicals to ensure the tanks are cleaned to meet the highest quality standards. 
                  </p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.chTankSection}>
        <div className={styles.chTankContent}>
          <div className={styles.chTankText}>
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
                360° Approach And Integrated Solutions For Cleaning, Mold
                Remediation, Insulation Replacement, Mechanical Repairs, And
                Energy Efficiency.
              </li>
            </ul>
          </div>
          <div className={styles.chTankImage}>
            <img
              src="/images/services/why-choose-ac (2).webp"
              alt="Why chTank Quality"
            />
          </div>
        </div>
      </section>

      <section className={styles.profSection}>
        <div className={styles.profContent}>
          <div className={styles.profText}>
            <h1>Water Provides an Ideal Environment for Germs to Thrive</h1>
            <p>
            Stored or stagnant water is an ideal breeding ground for germs, and water in tanks is no exception. If you neglect to clean your domestic water storage tank, it can become contaminated, leading to various health risks. Even activities like bathing or washing with this water can result in allergies and skin irritations.
            </p>
            <br />
            <p>
            This can contribute to waterborne diseases such as typhoid and diarrhea. Drinking contaminated water can make you sick, while the buildup of chemicals and gases can create a foul smell in both the tank and the water from your taps.
            </p>
            <br />
            <p>Additionally, uncleaned tanks provide an optimal environment for algae to thrive inside the tank, further contaminating the water and damaging the tank itself.</p><br/>
            <p>Are you worried about your tank&apos;s safety? With our services, cleaning comes right to your doorstep! Call us now!

</p>
          </div>
          <div className={styles.profImage}>
            <img
              src="/images/services/Facts_Watertank.avif"
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
            {waterfaq.map((item) => (
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

export default WaterTank;
