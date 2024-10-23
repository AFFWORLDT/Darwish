import styles from "./Handyman.module.css";
import CtaBtns from "../../ui/CtaBtns";
import Carousel from "../../ui/Carousel";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Wave from "../../ui/Wave";
import { handymanfaq } from "../../utils/faqHandyman";
import useMetaTags from "../../hooks/useMetaTags";

const Handyman = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  function handleToggle(id) {
    if (activeFaq === id) return setActiveFaq(null);
    setActiveFaq(id);
  }

  useMetaTags(
    'Handyman | Apex Cleaning Dubai',
    'Apex Cool Cleaning provides reliable handyman services in Dubai. From repairs to maintenance, our skilled professionals handle various tasks with efficiency and expertise. Contact us for all your handyman needs!',
    'handyman services Dubai,professional handyman Dubai,home repair services'
  )

    return (
        <>
            <section className={styles.handymanS}>
                <div className={styles.handyman}>
                    <div className={styles.handymanContent}>
                        <div className={styles.sectionStyles}>
                            <h1>
                            Expert and Affordable{" "}
                                <em>
                                    <strong> Handyman</strong>
                                </em>{" "}
                                Services!
                            </h1>
                            <p>Sit Back and Relax—We Have</p> 
                            <p>a Handyman for Every Need!</p>
                            <div className={styles.handymanCounts}>
                                <div className={styles.handymanrow}>
                                    <h1>100%</h1>
                                    <p>Eco-friendly Service</p>
                                </div>
                                <div className={styles.handymanrow}>
                                    <h1>24/7</h1>
                                    <p>Customer Support</p>
                                </div>
                            </div>
                            <CtaBtns />
                        </div>
                    </div>
                    <div className={styles.handymanCarousel}>
                        <div className={styles.sectionStyles}>
                            <Carousel>
                                <img src="/images/services/Handyman01 (2).jpg" alt="Handyman" />
                                <img src="/images/services/Handyman02 (2).jpg" alt="Handyman" />
                                <img src="/images/services/Banner_handy-1.jpg" alt="PaiHandymannting" />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>

      <section className={styles.wedohandySection}>
        <div className={styles.wedohandyContent}>
          <div className={styles.wedohandyText}>
            <h1>
              What{" "}
              <em>
                <strong>We Do</strong>
              </em>
            </h1>
            <p>
            Frequently, items in your home or office unexpectedly cease functioning and require repairs or fixing. In these cases, our convenient handyman services can assist you in resolving issues without trouble and avoiding future problems.
            </p>
            <br />
            <p>
            Our handyman services cover a wide range of tasks, including painting, water heater repairs, plumbing, carpentry, AC repair and maintenance, furniture assembly, and various odd jobs. We also specialize in bathroom refurbishment, electrical services, kitchen renovation, cable organization, and the installation of curtains, pictures, blinds, drapes, and window treatments. Additionally, we offer light fixture installation and repair, as well as AC installation and maintenance.            </p>
            <br />
            <p>
            We offer emergency handyman services for specific areas including washing machine repairs, fixing AC water leaks, addressing electrical failures, repairing water heaters, fixing breaker trips, handling short circuits, and unclogging drains.

            </p>
          </div>
          <div className={styles.wedohandyImage}>
            <img
              src="/images/services/What_We_Do_handy.png"
              alt="What we do"
            />
          </div>
        </div>
      </section>

      <section className={styles.workshandySection}>
        <div className={styles.workshandyContent}>
          <div className={styles.workshandyImage}>
            <img
              src="/images/services/Banner_handy-1.jpg"
              alt="How it works"
            />
          </div>
          <div className={styles.workshandyText}>
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
                  <h3>Problem Identification</h3>
                  <p>
                  First, we thoroughly check the problem area to identify the cause. 
                  </p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 02</h1>
                  <h3>Customizing Solution</h3>
                  <p>
                  Then we customize a solution to fix the issue and ensure proper preventive measures. This includes analyzing the best method, products, equipment, tools, and technology that should be used to resolve the problem.
                  </p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 03</h1>
                  <h3>Cost Estimate</h3>
                  <p>
                  Depending on the customized solution, we will provide a cost estimate and adjust it according to your budget if needed. 
                  </p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 04</h1>
                  <h3>Post Inspection</h3>
                  <p>
                  Once we have completed the service, we will run a quality check to ensure our standards are met. This is where we let the client inform us if any further adjustments are needed to meet their expected results. 
                  </p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.chhandySection}>
        <div className={styles.chhandyContent}>
          <div className={styles.chhandyText}>
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
          <div className={styles.chhandyImage}>
            <img
              src="/images/services/why-choose-ac (2).webp"
              alt="Why chhandy Quality"
            />
          </div>
        </div>
      </section>

      <section className={styles.profSection}>
        <div className={styles.profContent}>
          <div className={styles.profText}>
            <h1>A Stress-Free Life Starts with a Hassle-Free Home</h1>
            <p>
            Many of us often believe that we can handle most handyman services on our own. Have you ever thought about the consequences if things don&apos;t go as planned? Handyman services are affordable due to their possession of the necessary tools, equipment, and technology to complete tasks promptly. Purchasing these devices and learning how to operate them requires both financial investment and time.

            </p>
            <br />
            <p>
            Their expertise in dealing with a wide range of residential and commercial property matters enables them to efficiently meet your needs with lasting results, in a quick and hassle-free manner. Attempting this independently may involve a steep learning curve and numerous trial-and-error attempts, leading to increased expenses and anxiety.
            </p>
            <br />
            <p>Why bother spending time, money, and effort when you can simply entrust it to the professionals?</p>
          </div>
          <div className={styles.profImage}>
            <img
              src="/images/services/Facts_handy.jpg"
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
            {handymanfaq.map((item) => (
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

export default Handyman;
