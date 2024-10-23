import styles from "./Mold.module.css";
import CtaBtns from "../../ui/CtaBtns";
import Carousel from "../../ui/Carousel";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Wave from "../../ui/Wave";
import { moldfaq } from "../../utils/faqMold";
import useMetaTags from "../../hooks/useMetaTags";

const Mold = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  function handleToggle(id) {
    if (activeFaq === id) return setActiveFaq(null);
    setActiveFaq(id);
  }

  useMetaTags(
    'Mold Remediation | Apex Cleaning Dubai',
    'Apex Cool Cleaning offers expert mold remediation services in Dubai. Our professional team provides thorough removal and prevention solutions to ensure a safe, mold-free environment.',
    'mold remediation Dubai,professional mold removal,Apex Cool Cleaning'
  )
    return (
        <>
            <section className={styles.moldS}>
                <div className={styles.mold}>
                    <div className={styles.MoldCContent}>
                        <div className={styles.sectionStyles}>
                            <h1>
                            Eliminate, Control, and Prevent Mold with{" "}
                                <em>
                                    <strong> Expert Help!</strong>
                                </em>
                               
                            </h1>
                            <p>Restoring Health and Hygiene </p> 
                            <p>in Every Space—Call Us Today! </p>                            
                            <div className={styles.MoldCCounts}>
                                <div className={styles.MoldCrow}>
                                    <h1>100%</h1>
                                    <p>Eco-friendly Service</p>
                                </div>
                                <div className={styles.MoldCrow}>
                                    <h1>24/7</h1>
                                    <p>Customer Support</p>
                                </div>
                            </div>
                            <CtaBtns />
                        </div>
                    </div>
                    <div className={styles.MoldCCarousel}>
                        <div className={styles.sectionStyles}>
                            <Carousel>
                                <img src="/images/services/Mold-Remediation02.jpg" alt="Mold" />
                                <img src="/images/services/Banner_Mold-remediation-1.png" alt="Mold" />
                                <img src="/images/services/Banner_Mold-remediation3-1.png" alt="Mold" />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>

      <section className={styles.wedoMoldSection}>
        <div className={styles.wedoMoldContent}>
          <div className={styles.wedoMoldText}>
            <h1>
              What{" "}
              <em>
                <strong>We Do</strong>
              </em>
            </h1>
            <p>
            Any area exposed to water can easily develop mold, and even high humidity in a home can lead to condensation and mold growth. Mold can result in serious health risks and damage to property.            </p>
            <br />
            <p>
            At Apex Cleaning, we utilize advanced equipment, a skilled team, and the latest technology to remove mold. We identify the root cause of contamination and implement preventative measures to stop future growth.            </p><br/>
            <p>Our mold remediation services address both simple and complex issues in residential and commercial properties. We cover all problem areas, including attics, crawl spaces, wall interiors, basements, around chimneys, furnaces, ducts, kitchens, under sinks, foundation air vents, and under window unit air conditioners.</p>
          
          </div>
          <div className={styles.wedoMoldImage}>
            <img
              src="/images/services/What_We_Do_Mold-1.jpg"
              alt="What we do"
            />
          </div>
        </div>
      </section>

      <section className={styles.worksMoldSection}>
        <div className={styles.worksMoldContent}>
          <div className={styles.worksMoldImage}>
            <img
              src="/images/services/How-It-Works_Mold.jpg"
              alt="How it works"
            />
          </div>
          <div className={styles.worksMoldText}>
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
                  <h3>Mold Inspection</h3>
                  <p>
                  There are around 5 million species of fungi in the world, so we begin our task by identifying the type of mold and the source of the problem leading to their growth. 
                  </p>                
                  </div>
                <div className={styles.carouselItem}>
                  <h1>Step 02</h1>
                  <h3>Repairing Problem Source </h3>
                  <p>
                  We first solve and fix the problem or issues leading to mold growth, such as water damage. 
                  </p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 03</h1>
                  <h3>Dehumidify</h3>
                  <p>
                  Dehumidifying the affected areas return spaces to levels that will not promote future mold growth. This also includes containing the area to prevent mold spores from spreading to other areas. 
                  </p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 04</h1>
                  <h3>Treatment For Structural Surfaces </h3>
                  <p>
                  If there is any mold on structural surfaces, the area is treated with a solution that lifts it off the surface for easy removal. This is where we remove any materials not part of the structure that have been affected by mold.                  
                  </p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 05</h1>
                  <h3>Vaccum </h3>
                  <p>
                  Before the final step, the affected areas are treated with a HEPA vacuum that captures the mold
                                    </p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 06</h1>
                  <h3>Protective Lyer</h3>
                  <p>
                  As the final step, an antimicrobial agent is applied to offer a final protective coat.
                                    </p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 07</h1>
                  <h3>Air Quality Testing </h3>
                  <p>
                  Once the job is done, we run an air quality test to ensure the problem is properly addressed and to understand how much mold remains (whether the amount falls within the safe levels)                   </p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.chMoldSection}>
        <div className={styles.chMoldContent}>
          <div className={styles.chMoldText}>
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
          <div className={styles.chMoldImage}>
            <img
              src="/images/services/why-choose-ac (2).webp"
              alt="Why choose Quality"
            />
          </div>
        </div>
      </section>

      <section className={styles.profSection}>
        <div className={styles.profContent}>
          <div className={styles.profText}>
            <h1>Remediation Goes Beyond Removal</h1>
            <p>
            You might have encountered many advertisements promising mold removal, but these often only provide a temporary fix rather than addressing the underlying issue. Mold remediation and removal are not the same; while surface mold can be removed relatively easily, it doesn’t tackle the root cause or include preventative measures. Mold remediation, on the other hand, ensures a reliable sense of safety and prevents future problems. </p>           <br />
            <p>
            If you’ve been relying on temporary mold removal solutions, we’re here to help you transition to a permanent solution.    </p>        <br />
          </div>
          <div className={styles.profImage}>
            <img
              src="/images/services/Facts_Mold.jpg"
              alt="Mold"
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
            {moldfaq.map((item) => (
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

export default Mold;
