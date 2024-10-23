import styles from "./PestControl.module.css";
import CtaBtns from "../../ui/CtaBtns";
import Carousel from "../../ui/Carousel";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Wave from "../../ui/Wave";
import { pestfaq } from "../../utils/faqPestControl";
import useMetaTags from "../../hooks/useMetaTags";

const PestControl = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  function handleToggle(id) {
    if (activeFaq === id) return setActiveFaq(null);
    setActiveFaq(id);
  }

  useMetaTags(
    'Pest Control Service | Apex Cleaning Dubai',
    'Apex Cool Cleaning provides reliable pest control services in Dubai. Our expert team offers comprehensive solutions to effectively manage and eliminate pests, ensuring a safe and pest-free environment.',
    'pest control services Dubai,professional pest control,Apex Cool Cleaning'
  )

    return (
        <>
            <section className={styles.pestControlS}>
                <div className={styles.pestControl}>
                    <div className={styles.pestCContent}>
                        <div className={styles.sectionStyles}>
                            <h1>
                            Better Safe Than Sorry! Pest Control{" "}
                                <em>
                                    <strong> Without Harm!</strong>
                                </em>
                               
                            </h1>
                            <p>Your Trusted Local Pest Control </p> 
                            <p>Service for a Clean, Safe, and </p>
                            <p>Hygienic Environment.</p>
                            
                            <div className={styles.pestCCounts}>
                                <div className={styles.pestCrow}>
                                    <h1>100%</h1>
                                    <p>Eco-friendly Service</p>
                                </div>
                                <div className={styles.pestCrow}>
                                    <h1>24/7</h1>
                                    <p>Customer Support</p>
                                </div>
                            </div>
                            <CtaBtns />
                        </div>
                    </div>
                    <div className={styles.pestCCarousel}>
                        <div className={styles.sectionStyles}>
                            <Carousel>
                                <img src="/images/services/Pestcontrol 01.jpg" alt="pestControl" />
                                <img src="/images/services/Pestcontrol 03.avif" alt="pestControl" />
                                <img src="/images/services/Pestcontrol 02.jpg" alt="pestControl" />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>

      <section className={styles.wedoPestSection}>
        <div className={styles.wedoPestContent}>
          <div className={styles.wedoPestText}>
            <h1>
              What{" "}
              <em>
                <strong>We Do</strong>
              </em>
            </h1>
            <p>
            Public health officials emphasize that your pest control measures play a crucial role in maintaining clean and safe living conditions. Even if you diligently care for your home, you may still encounter unwanted pests invading your house or office space.
            </p>
            <br />
            <p>
            Common pests like cockroaches, rats, termites, flies, and wasps can carry diseases and viruses that pose significant health risks to you, your family, and your pets. They can damage your property, contaminate the air you breathe, and even taint the food you eat.
            </p><br/>
            <p>At Apex Care, our pest control service standards are designed to ensure the safety, integrity, and cleanliness of your property and belongings, thereby enhancing the quality of healthy, clean, and safe living. We understand that each home is unique, which is why we tailor a program specifically for you.</p>
          
          </div>
          <div className={styles.wedoPestImage}>
            <img
              src="/images/services/What_We_Do_Pestcontrol.jpg"
              alt="What we do"
            />
          </div>
        </div>
      </section>

      <section className={styles.worksPestSection}>
        <div className={styles.worksPestContent}>
          <div className={styles.worksPestImage}>
            <img
              src="/images/services/How-It-Works_Pestcontrol-1.jpg"
              alt="How it works"
            />
          </div>
          <div className={styles.worksPestText}>
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
                  <h3>Full Inspection</h3>
                  <p>
                  We begin our process by thoroughly inspecting the infested destination and location.                  </p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 02</h1>
                  <h3>Identification</h3>
                  <p>
                  Our inspection process helps us to determine the scale of infestation, and points of entry, identify the hidden colonies of pests and determine if there is any weak structure in properties that invite them.                   </p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 03</h1>
                  <h3>Treatment SElection</h3>
                  <p>
                  Depending on the findings of the identification, we choose a suitable treatment approach using the most effective products, methods, and technology. Our treatment methods focus on eliminating, controlling, and gradually preventing the infestation from recurring. Chemical treatment, biological pest control, and electronic pest control are common methods for dealing with pests.                   </p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 04</h1>
                  <h3>Checking For Safety, Quality, And Assurance </h3>
                  <p>
                  Once the tasks are done as planned, we conduct a post-inspection to check if the service has met our quality checklist for safety and assurance. This is where we consider any other adjustments or extra services where needed or as required by the client.                   </p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.chPestSection}>
        <div className={styles.chPestContent}>
          <div className={styles.chPestText}>
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
          <div className={styles.chPestImage}>
            <img
              src="/images/services/why-choose-ac (2).webp"
              alt="Why Pestcontrol Quality"
            />
          </div>
        </div>
      </section>

      <section className={styles.profSection}>
        <div className={styles.profContent}>
          <div className={styles.profText}>
            <h1>A Pest-Free Home Is a Healthy Home</h1>
            <p>
            Have you or your family experienced persistent health issues that just won&apos;t go away? Pests could be the cause. Rodents, for example, carry over 200 pathogens that can spread various diseases, including the deadly plague.            </p>
            <br />
            <p>
            Each year, rodents contaminate enough food to potentially feed over 200 million people. Consuming this contaminated food, even accidentally, can pose serious health risks. Pests also taint indoor air with their droppings, feces, and urine, which can create a breeding ground for health problems and exacerbate conditions like asthma and allergies.            </p>
            <br />
            <p>Don’t Let Pests Affect Your Health. We Understand the Habits of Every Pest. Call Us Now!</p><br/>
          </div>
          <div className={styles.profImage}>
            <img
              src="/images/services/Facts_Pestcontrol.jpg"
              alt="Pest Control"
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
            {pestfaq.map((item) => (
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

export default PestControl;
