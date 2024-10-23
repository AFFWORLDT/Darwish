import React from "react";
import styles from './Fit_Out.module.css';
import CtaBtns from "../../ui/CtaBtns";
import Carousel from "../../ui/Carousel";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Services from "../../ui/Services";
import { interiorfaq } from "../../utils/faqInterior";
import Wave from "../../ui/Wave";
import { fitOutfaq } from "../../utils/faqFitout";
import useMetaTags from "../../hooks/useMetaTags";


const Fit_Out = () => {

  const [activeFaq, setActiveFaq] = useState(null);
  const [activeFaq1, setActiveFaq1] = useState(null);

  function handleToggle(id) {
    if (activeFaq === id) return setActiveFaq(null);
    setActiveFaq(id);
  }

  function handleToggle1(id) {
    if (activeFaq1 === id) return setActiveFaq1(null);
    setActiveFaq1(id);
  }

  useMetaTags(
    'Interior Fitout | Apex Cleaning Dubai',
    `Transform your space with Apex Cool Cleaning's expert fit-out services in Dubai. We specialize in designing and executing high-quality office and commercial fit-outs to meet your needs.`,
    'fit-out services Dubai,office fit-out Dubai'
  )

    return (
        <>
            <section className={styles.interiorS}>
                <div className={styles.interiorSer}>
                    <div className={styles.interiorSerContent}>
                        <div className={styles.sectionStyles}>
                            <h1>
                            Interior Design Fit-Out & Turnkey Solutions in{" "}
                                <em>
                                    <strong> Dubai and Abu Dhabi</strong>
                                </em>                                 
                            </h1>
                            
                            <div className={styles.interiorSerCounts}>
                                <div className={styles.interiorSerrow}>
                                    <h1>100%</h1>
                                    <p>Eco-friendly Service</p>
                                </div>
                                <div className={styles.interiorSerrow}>
                                    <h1>24/7</h1>
                                    <p>Customer Support</p>
                                </div>
                            </div>
                            <CtaBtns />
                        </div>
                    </div>
                    <div className={styles.interiorSerCarousel}>
                        <div className={styles.sectionStyles}>
                            <Carousel>
                                <img src="/images/services/interior 01.avif" alt="interior" />
                                <img src="/images/services/interior 02.avif" alt="interior" />
                                <img src="/images/services/interior 03.avif" alt="interior" />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.wedoIntSSection}>
                <div className={styles.wedoIntSContent}>
                <div className={styles.wedoIntSImage}>
                        <img src="/images/services/What_We_Do_Interior.avif" alt="What we do" />
                    </div>
                    <div className={styles.wedoIntSText}>
                        <h1>
                            What{" "}
                            <em>
                                <strong>We Do</strong>
                            </em>
                        </h1>
                        <ul>
                            <li><FaCheckCircle className={styles.circleIcon} />Expert Interior Fit-Out Solutions for Every Environment</li>
                            <li><FaCheckCircle className={styles.circleIcon} />Interior Fit-Out Solutions.</li>
                            <li><FaCheckCircle className={styles.circleIcon} />Expert Interior Fit-Out Solutions.</li>
                            <li><FaCheckCircle className={styles.circleIcon} />Complete Solutions from Concept to Completion.</li>
                            <button className={styles.bookBtn}>Book a free Inspection</button>
                        </ul>
                    </div>
                    
                </div>
            </section>


            <section className={styles.chIntSSection}>
                <div className={styles.chIntSContent}>
                
                    <div className={styles.chIntSText}>
                        <h1>
                            Why{" "}
                            <em>
                                <strong>Us</strong>
                            </em>
                        </h1>
                        <div className={styles.faqContainer}>
            {interiorfaq.map((item) => (
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
                    </div>
                    <div className={styles.chIntSImage}>
                        <img src="/images/services/Why-Us-interior.avif" alt="Why chEle Quality" />
                    </div>
                    
                </div>
            </section>


            <Services/>

            <section className={styles.faq}>
        <div className="sectionStyles">
          <h2>
          Frequently Asked {" "}
            <em>
              <strong> Questions </strong>
            </em>
          </h2>

          <div className={styles.faqContainer}>
            {fitOutfaq.map((item) => (
              <div className={styles.faqItem} key={item.id}>
                <p
                  className={`${styles.title} ${activeFaq1 === item.id ? styles.activeToggle1 : ""}`}
                  onClick={() => handleToggle1(item.id)}
                >
                  <span>{item.title}</span>
                  {activeFaq1 === item.id ? <span>-</span> : <span>+</span>}
                </p>
                {activeFaq1 === item.id && (
                  <p className={styles.content}>{item.content}</p>
                )}
              </div>
            ))}
          </div>

          <Wave/>
        </div>
      </section> 
        </>
    )
}

export default Fit_Out;