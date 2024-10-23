import styles from "./Plumbing.module.css";
import CtaBtns from "../../ui/CtaBtns";
import Carousel from "../../ui/Carousel";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Wave from "../../ui/Wave";
import { plumbingfaq } from "../../utils/faqPlumbing";
import useMetaTags from "../../hooks/useMetaTags";

const Plumbing = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  function handleToggle(id) {
    if (activeFaq === id) return setActiveFaq(null);
    setActiveFaq(id);
  }

  useMetaTags(
    'Plumbing Service | Apex Cleaning Dubai',
    'Apex Cool Cleaning offers expert plumbing services in Dubai. From repairs to installations, our skilled plumbers provide reliable solutions to ensure your plumbing system functions flawlessly.',
    'plumbing services Dubai,professional plumbing Dubai,Apex Cool Cleaning'
  )

    return (
        <>
            <section className={styles.plumbingCleaning}>
                <div className={styles.plumbing}>
                    <div className={styles.plumbingContent}>
                        <div className={styles.sectionStyles}>
                            <h1>
                                Don&apos;t Let A Leaking Pipe Ruin
                                <em>
                                    <strong> Your Day.</strong>
                                </em>{" "}
                                Call Us Now!{" "}
                            </h1>
                            <p>We Rush For The Flush. 24/7 Services</p>
                            <p>For All Your Residential And Commercial</p>
                            <p>Plumbing Needs In The UAE.</p>
                            <div className={styles.plumbingCounts}>
                                <div className={styles.plumbingrow}>
                                    <h1>100%</h1>
                                    <p>Eco-friendly Service</p>
                                </div>
                                <div className={styles.plumbingrow}>
                                    <h1>24/7</h1>
                                    <p>Customer Support</p>
                                </div>
                            </div>
                            <CtaBtns />
                        </div>
                    </div>
                    <div className={styles.plumbingCarousel}>
                        <div className={styles.sectionStyles}>
                            <Carousel>
                                <img src="/images/services/Plumbing01.jpg" alt="Plumbing" />
                                <img src="/images/services/Plumbing02.jpg" alt="Plumbing" />
                                <img src="/images/services/Banner_plumbing-1.jpg" alt="Plumbing" />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>

      <section className={styles.wedoPSection}>
        <div className={styles.wedoPContent}>
          <div className={styles.wedoPText}>
            <h1>
              What{" "}
              <em>
                <strong>We Do</strong>
              </em>
            </h1>
            <p>
              Plumbing issues are unavoidable, whether they occur at your
              residence or workplace. Neglected plumbing issues may result in
              pollution, transmit illnesses, and greatly raise your water
              expenses. They increase humidity in the air, emit a unpleasant
              odor, and cause mold to grow on walls and other surfaces, which
              can lead to potential harm to your home.
            </p>
            <br />
            <p>
              Apex Cleaning utilizes a distinctive approach to address various
              plumbing needs including faucet leaks, bathroom mixer repairs,
              water heater fixes, pipe replacements, kitchen and bathroom
              accessory installations, drain unblocking, heater maintenance, and
              water tank cleaning and sterilization. A maintenance package is
              also offered to help avoid costly repairs by addressing minor
              plumbing issues and keeping your home or office water efficient.
            </p>
          </div>
          <div className={styles.wedoPImage}>
            <img
              src="/images/services/What_We_Do_plumbing-1.jpg"
              alt="What we do"
            />
          </div>
        </div>
      </section>

      <section className={styles.worksPSection}>
        <div className={styles.worksPContent}>
          <div className={styles.worksPImage}>
            <img
              src="/images/services/How-It-Works_plumbing-1.webp"
              alt="How it works"
            />
          </div>
          <div className={styles.worksPText}>
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
                  <h3>PreInspection</h3>
                  <p>
                    Our services begin with a deep inspection of the problem
                    area to identify its root cause or source of the problem.{" "}
                  </p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 02</h1>
                  <h3>Identification Of Suitable Solution </h3>
                  <p>
                    After this procedure, a suitable plumbing service is
                    recommended, and a suitable selection of equipment, tools,
                    and products is made.{" "}
                  </p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 03</h1>
                  <h3>Free Estimation</h3>
                  <p>
                    Once we have identified the best solution to address the
                    problem, we provide a free estimation of the cost. We can
                    also customize a suitable service package according to your
                    budget if needed.
                  </p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 04</h1>
                  <h3>Post Inspection</h3>
                  <p>
                    Once the services are completed, we do another inspection to
                    confirm if the issue is resolved as per our quality
                    checklist. We also ask our clients to check and request any
                    adjustments or alterations if needed.{" "}
                  </p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.chPSection}>
        <div className={styles.chPContent}>
          <div className={styles.chPText}>
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
          <div className={styles.chPImage}>
            <img
              src="/images/services/why-choose-ac (2).webp"
              alt="Why chP Quality"
            />
          </div>
        </div>
      </section>

      <section className={styles.probSection}>
        <div className={styles.probContent}>
          <div className={styles.probText}>
            <h1>What Can Ignoring Plumbing Problems Cost You? </h1>
            <p>
              Typically, small pipe leaks can result in the loss of about 10,000
              gallons of water annually. The greater the size of the leak, the
              increased amount of water is lost, resulting in a higher water
              bill. Leaky pipes can lead to moisture accumulation within walls,
              providing an ideal breeding ground for mold, pathogens, and
              bacteria to thrive.
            </p>
            <br />
            <p>
              The consequences of this lead to various health problems such as
              allergies, asthma, and skin irritations - ultimately contaminating
              the quality of indoor air. It can also degrade the house
              structure, peeling off wall paint, leading to costly repairs, and
              diminishing the property&apos;s value.
            </p>
            <br />
            <p>
              Have you been experiencing leaking pipes for an extended period?
              Do not delay until it&apos;s too late. Our expert plumbers are
              just a phone call away.
            </p>
          </div>
          <div className={styles.probImage}>
            <img
              src="/images/services/Fact_Plumbing (2).jpg"
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
            {plumbingfaq.map((item) => (
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

export default Plumbing;
