import styles from "./PostConstruction.module.css";
import CtaBtns from "../../ui/CtaBtns";
import Carousel from "../../ui/Carousel";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Wave from "../../ui/Wave";
import { postConfaq } from "../../utils/faqPostCon";
import useMetaTags from "../../hooks/useMetaTags";

const PostConstruction = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  function handleToggle(id) {
    if (activeFaq === id) return setActiveFaq(null);
    setActiveFaq(id);
  }

  useMetaTags(
    'Post Construction Service | Apex Cleaning Dubai',
    'Apex Cool Cleaning offers thorough post-construction services in Dubai. Our team handles cleanup, inspections, and finishing touches to ensure your space is ready for use and immaculate.',
    'post-construction services Dubai,construction cleanup Dubai,post-construction cleaning,Apex Cool Cleaning'
  )

    return (
        <>
            <section className={styles.postConS}>
                <div className={styles.postConstruction}>
                    <div className={styles.postConstContent}>
                        <div className={styles.sectionStyles}>
                            <h1>
                            Expert Cleaners Delivered Right to{" "}
                                <em>
                                    <strong> Your Doorstep!</strong>
                                </em>
                               
                            </h1>
                            <p>Leave the Mess to Us! Your Construction  </p> 
                            <p>Cleanup Is Our Concern.</p>  
                            <div className={styles.postConstCounts}>
                                <div className={styles.postConstrow}>
                                    <h1>100%</h1>
                                    <p>Eco-friendly Service</p>
                                </div>
                                <div className={styles.postConstrow}>
                                    <h1>24/7</h1>
                                    <p>Customer Support</p>
                                </div>
                            </div>
                            <CtaBtns />
                        </div>
                    </div>
                    <div className={styles.postConstCarousel}>
                        <div className={styles.sectionStyles}>
                            <Carousel>
                                <img src="/images/services/postconstruction 01.webp" alt="PostConstruction" />
                                <img src="/images/services/postconstruction 03.avif" alt="PostConstruction" />
                                <img src="/images/services/postconstruction 02.jpg" alt="PostConstruction" />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>

      <section className={styles.wedoPostSection}>
        <div className={styles.wedoPostContent}>
          <div className={styles.wedoPostText}>
            <h1>
              What{" "}
              <em>
                <strong>We Do</strong>
              </em>
            </h1>
            <p>
            Even if a construction contractor handles your property, they typically only perform a general debris cleanup at the end of their project. Detailed cleaning isn’t part of their responsibilities, which is where our post-construction cleaning services come in. We use a proven approach to ensure your completed property is free of mess, thoroughly clean, visually appealing, and safe for immediate use.            </p>
            <br />        
          </div>
          <div className={styles.wedoPostImage}>
            <img
              src="/images/services/What_We_Do_Postconstruction.avif"
              alt="What we do"
            />
          </div>
        </div>
      </section>

      <section className={styles.worksPostSection}>
        <div className={styles.worksPostContent}>
          <div className={styles.worksPostImage}>
            <img
              src="/images/services/How-It-Works_PostConstruction.avif"
              alt="How it works"
            />
          </div>
          <div className={styles.worksPostText}>
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
                  <h3>Inspection & Cost Estimation</h3>
                  <p>
                  First, we will do a thorough inspection of the property to understand the type of cleaning needed, how long it will take, equipment, tools, and products required. It will also consider the number of staff needed to come up with a cost estimation.                                     </p>                
                  </div>
                <div className={styles.carouselItem}>
                  <h1>Step 02</h1>
                  <h3>Rough Clean</h3>
                  <p>
                  Then we do a rough cleaning which includes removing large items, debris, trash, leftover materials and other things that cannot be vacuumed. General sweeping or vacuuming will then follow. Removal, but not the cleaning of stickers from doors and windows, are also included in this stage. 
                  </p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 03</h1>
                  <h3>Light Clean</h3>
                  <p>
                  This is the phase where detailed cleaning is done. It mainly includes cleaning sensitive and complex rooms and spaces in the houses that require special attention, like the garden, backyards, store rooms, wardrobes, bathrooms, kitchens, sinks, toilets, windows, and cabinets.                                     </p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 04</h1>
                  <h3>Final Clean</h3>
                  <p>
                  This is the last stage of post-construction cleaning, where minor touch-ups are done. This is mainly done to eliminate the remaining dust, dirt, smudges, and fingerprints that may still be lingering. This is the stage of cleaning that takes the least time. 
                  </p>                
                  </div>
                
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.chPostSection}>
        <div className={styles.chPostContent}>
          <div className={styles.chPostText}>
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
                360° Approach And Integrated Solutions For Cleaning, Post
                Remediation, Insulation Replacement, Mechanical Repairs, And
                Energy Efficiency.
              </li>
            </ul>
          </div>
          <div className={styles.chPostImage}>
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
            <h1>Safety Beyond Cleaning</h1>
            <p>
            Even if you attempt post-construction cleaning yourself, it involves more than it seems. Newly constructed sites can pose various hazards, and only professional cleaners have the necessary safety equipment, tools, and technology to handle these risks efficiently. They also perform a more thorough job compared to using over-the-counter products, which can be hazardous if not used correctly.            </p>
            <p>
            Improper cleaning can leave dust, debris, and other harmful elements in the air and on surfaces, posing health risks. That’s why it’s best to leave post-construction cleaning to the experts.            </p>        <br />
          </div>
          <div className={styles.profImage}>
            <img
              src="/images/services/Fact_Postcleaning.avif"
              alt="Post construction"
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
            {postConfaq.map((item) => (
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

export default PostConstruction;
