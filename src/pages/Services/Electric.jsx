import React from "react";
import styles from './Electric.module.css';
import CtaBtns from "../../ui/CtaBtns";
import Carousel from "../../ui/Carousel";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Wave from "../../ui/Wave";
import { electricfaq } from "../../utils/faqElectric";
import useMetaTags from "../../hooks/useMetaTags";


const Electric = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    function handleToggle(id) {
      if (activeFaq === id) return setActiveFaq(null);
      setActiveFaq(id);
    }
  
    useMetaTags(
        'Electric Service | Apex Cleaning Dubai',
        'Apex Cool Cleaning offers reliable electrical services in Dubai. Our skilled electricians handle everything from installations to repairs, ensuring safety and efficiency for your home or business.',
        'electrical services Dubai,electrical repairs Dubai'
    )

    return (
        <>
            <section className={styles.electricS}>
                <div className={styles.electric}>
                    <div className={styles.electricContent}>
                        <div className={styles.sectionStyles}>
                            <h1>
                            Brightening Your Future with Dependable Electrical Services,{" "}
                                <em>
                                    <strong> Anytime, Anywhere!</strong>
                                </em>
                                
                            </h1>
                            <p>We&apos;re Connected with the Best Team And </p> 
                            <p>Equipment to Get Your Electricity Up</p>
                            <p>and Running. Contact Us Today!</p>                            
                            <div className={styles.electricCounts}>
                                <div className={styles.electricrow}>
                                    <h1>100%</h1>
                                    <p>Eco-friendly Service</p>
                                </div>
                                <div className={styles.electricrow}>
                                    <h1>24/7</h1>
                                    <p>Customer Support</p>
                                </div>
                            </div>
                            <CtaBtns />
                        </div>
                    </div>
                    <div className={styles.electricCarousel}>
                        <div className={styles.sectionStyles}>
                            <Carousel>
                                <img src="/images/services/Electric-Service01.jpg" alt="electric" />
                                <img src="/images/services/Electric-Service02.jpg" alt="electric" />
                                <img src="/images/services/Banner_Electric-1.jpg" alt="electric" />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.wedoEleSection}>
                <div className={styles.wedoEleContent}>
                    <div className={styles.wedoEleText}>
                        <h1>
                            What{" "}
                            <em>
                                <strong>We Do</strong>
                            </em>
                        </h1>
                        <p>Electricity plays a crucial role in maintaining effectiveness in both residential and commercial buildings. It is crucial for powering all devices, entertainment, lighting, and, of course, all technology. At Apex Cleaning, we offer an extensive array of electrical services that address repairs, upkeep, and prevention to ensure your property&apos;s electrical systems are functioning smoothly with few disruptions.</p><br />
                        <p>With a highly skilled team of electricians specializing in key areas and utilizing the latest technology and equipment, we guarantee to offer the most appropriate electrical services at an affordable price throughout the UAE.</p><br/>
                    </div>
                    <div className={styles.wedoEleImage}>
                        <img src="/images/services/What_We_Do_Electric-1.png" alt="What we do" />
                    </div>
                </div>
            </section>

            <section className={styles.worksEleSection}>
                <div className={styles.worksEleContent}>
                    <div className={styles.worksEleImage}>
                        <img src="/images/services/How-It-Works_Electric-1.jpg" alt="How it works" />
                    </div>
                    <div className={styles.worksEleText}>
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
                                    <h3>Inspection</h3>
                                    <p>We begin the service by analyzing the problem areas thoroughly. </p>
                                </div>
                                <div className={styles.carouselItem}>
                                    <h1>Step 02</h1>
                                    <h3>Identification Of Solution</h3>
                                    <p>Based on the inspection of the problem, a suitable solution will be recommended. This is where the right tools, equipment, and solution approach will be decided. All our service approaches are exclusively customized according to the nature of each problem. </p>
                                </div>
                                <div className={styles.carouselItem}>
                                    <h1>Step 03</h1>
                                    <h3>Cost Estimation</h3>
                                    <p>Cost estimation will be made according to the selected solution and method. We can adjust the solution to suit your budget as well if needed. </p>
                                </div>
                                <div className={styles.carouselItem}>
                                    <h1>Step 04</h1>
                                    <h3>Post Inspection</h3>
                                    <p>Once the task is completed, we thoroughly check for the accuracy and reliability of the services according to our quality standards checklist. </p>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.chEleSection}>
                <div className={styles.chEleContent}>
                    <div className={styles.chEleText}>
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
                    <div className={styles.chEleImage}>
                        <img src="/images/services/why-choose-ac (2).webp" alt="Why chEle Quality" />
                    </div>
                </div>
            </section>

            <section className={styles.factSection}>
                <div className={styles.factContent}>
                    <div className={styles.factText}>
                        <h1>
                        Don&apos;t Attempt To Fix Electric Issues By Yourself

                        </h1>
                        <p>While it may be tempting to try to solve electrical issues on your own, doing so can actually worsen the situation and put your safety and property at risk. Sadly, a lot of homeowners choose to do their own repairs, leading to even costlier repairs in the end.                        </p><br />
                        <p>Only electricians with professional qualifications can carry out electrical services in compliance with regulations and, crucially, reduce the chances of safety hazards, code infractions, and property harm. They possess the necessary tools, expertise, and knowledge to resolve the issue so that you can remain free from concerns about its recurrence or additional harm.</p><br />
                        <p>Make the change to Apex Cleaning for your electrical needs and you won&apos;t regret it!</p>
                    </div>
                    <div className={styles.factImage}>
                        <img src="/images/services/Facts_Electric.jpg" alt="Electric" />
                    </div>
                </div>
            </section>

          <section className={styles.faq}>
        <div className="sectionStyles">
          <h2>
          Frequently Asked {" "}
            <em>
              <strong> Questions </strong>
            </em>
          </h2>

          <div className={styles.faqContainer}>
            {electricfaq.map((item) => (
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
    )
}

export default Electric;