import React from "react";
import styles from './Annual_Maintenence.module.css';
import CtaBtns from "../../ui/CtaBtns";
import Carousel from "../../ui/Carousel";
import { FaCheckCircle } from "react-icons/fa";
import Services from "../../ui/Services";
import useMetaTags from "../../hooks/useMetaTags";

const Annual_Maintenence = () => {

  useMetaTags(
    'Annual Maintenence | Apex Cleaning Dubai',
    'Enhance the efficiency and longevity of your air conditioning systems with our annual maintenance services. Our skilled technicians provide thorough inspections and expert care.',
    'annual maintenance services,annual HVAC inspections'

  )

    return (
        <>
            <section className={styles.annualS}>
                <div className={styles.annualM}>
                    <div className={styles.annualMContent}>
                        <div className={styles.sectionStyles}>
                            <h1>
                            
                                <em>
                                    <strong>Tailored</strong>
                                </em> {" "}
                                Annual Maintenance Contracts
                                
                            </h1>
                            <p>We provide the most cost-effective</p> 
                            <p> annual maintenance contracts.</p>
                            <div className={styles.annualMCounts}>
                                <div className={styles.annualMrow}>
                                    <h1>100%</h1>
                                    <p>Eco-friendly Service</p>
                                </div>
                                <div className={styles.annualMrow}>
                                    <h1>24/7</h1>
                                    <p>Customer Support</p>
                                </div>
                            </div>
                            <CtaBtns />
                        </div>
                    </div>
                    <div className={styles.annualMCarousel}>
                        <div className={styles.sectionStyles}>
                            <Carousel>
                                <img src="/images/services/Electric-Service01.jpg" alt="electric" />
                                <img src="/images/services/deepcleaning 04.avif" alt="electric" />
                                <img src="/images/services/Plumbing01.jpg" alt="electric" />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.wedoAnnMSection}>
                <div className={styles.wedoAnnMContent}>
                <div className={styles.wedoAnnMImage}>
                        <img src="/images/services/Facts_Electric.jpg" alt="What we do" />
                    </div>
                    <div className={styles.wedoAnnMText}>
                        <h1>
                            What{" "}
                            <em>
                                <strong>We Do</strong>
                            </em>
                        </h1>
                        <p>Whether it&apos;s a residential or commercial property, daily wear and tear can lead to frequent and costly damages and repairs. Our annual maintenance services employ state-of-the-art technology, equipment, and tools to repair, clean, or replace fixtures, ensuring efficient operation while prioritizing safety and hygiene.</p><br />
                        <p>With our Annual Maintenance Contracts (AMCs), we ensure your property remains functional, minimizing the need for urgent repairs throughout the year. Our contracts help you avoid costly repairs and include emergency services to relieve you from stress when unexpected breakdowns occur in your home or property.</p><br/>
                    </div>
                    
                </div>
            </section>

            <Services/>

            <section className={styles.chAnnMSection}>
                <div className={styles.chAnnMContent}>
                    <div className={styles.chAnnMText}>
                        <h1>
                            Why{" "}
                            <em>
                                <strong>Apex Cool Cleaning?</strong>
                            </em>
                        </h1>
                        <ul>
                            <li><FaCheckCircle className={styles.circleIcon} />Hassle-free booking</li>
                            <li><FaCheckCircle className={styles.circleIcon} />Professional Technicians</li>
                            <li><FaCheckCircle className={styles.circleIcon} />Comprehensive And Quality Hvac Service</li>
                            <li><FaCheckCircle className={styles.circleIcon} />100% customer satisfaction guaranteed</li>
                            <li><FaCheckCircle className={styles.circleIcon} />Best Quality & Eco-friendly Equipment</li>
                            <li><FaCheckCircle className={styles.circleIcon} />Quality services at a reasonable cost</li>
                            <li><FaCheckCircle className={styles.circleIcon} />Qualified Professionals</li>
                            <li><FaCheckCircle className={styles.circleIcon} />Modern Equipment</li>
                            <li><FaCheckCircle className={styles.circleIcon} />Round-the-clock Support</li>
                            <li><FaCheckCircle className={styles.circleIcon} />360° Approach And Integrated Solutions For Cleaning, Mold Remediation, Insulation Replacement, Mechanical Repairs, And Energy Efficiency.</li>

                        </ul>
                    </div>
                    <div className={styles.chAnnMImage}>
                        <img src="/images/services/why-choose-ac (2).webp" alt="Why chEle Quality" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Annual_Maintenence;