import styles from "./Painting.module.css";
import CtaBtns from "../../ui/CtaBtns";
import Carousel from "../../ui/Carousel";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Wave from "../../ui/Wave";
import { paintingfaq } from "../../utils/faqPainting";
import useMetaTags from "../../hooks/useMetaTags";

const Painting = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  function handleToggle(id) {
    if (activeFaq === id) return setActiveFaq(null);
    setActiveFaq(id);
  }

  useMetaTags(
    'Painting Service | Apex Cleaning Dubai',
    'Apex Cool Cleaning offers professional painting services in Dubai. Our skilled team provides high-quality interior and exterior painting to transform your space with a fresh, vibrant look.',
    'painting services Dubai,interior painting Dubai,Apex Cool Cleaning'
  )
    return (
        <>
            <section className={styles.paintingC}>
                <div className={styles.painting}>
                    <div className={styles.paintingContent}>
                        <div className={styles.sectionStyles}>
                            <h1>
                            Let Us Paint
                                <em>
                                    <strong> Your Future</strong>
                                </em>{" "}
                                One Colour At A Time. Call Us Now!{" "}
                            </h1>
                            <p>Your perfect paintwork starts with us! With</p> 
                            <p>a team of professional painters and </p>
                            <p>cutting-edge technology, we make</p>
                            <p> painting an investment, not an expense.</p>
                            
                            <div className={styles.paintingCounts}>
                                <div className={styles.paintingrow}>
                                    <h1>100%</h1>
                                    <p>Eco-friendly Service</p>
                                </div>
                                <div className={styles.paintingrow}>
                                    <h1>24/7</h1>
                                    <p>Customer Support</p>
                                </div>
                            </div>
                            <CtaBtns />
                        </div>
                    </div>
                    <div className={styles.paintingCarousel}>
                        <div className={styles.sectionStyles}>
                            <Carousel>
                                <img src="/images/services/Painting01.webp" alt="Painting" />
                                <img src="/images/services/Painting02.jpg" alt="Painting" />
                                <img src="/images/services/Banner_Painting-1.jpg" alt="Painting" />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>

      <section className={styles.wedoPaintSection}>
        <div className={styles.wedoPaintContent}>
          <div className={styles.wedoPaintText}>
            <h1>
              What{" "}
              <em>
                <strong>We Do</strong>
              </em>
            </h1>
            <p>
              We offer thorough painting services that adhere to both aesthetic
              standards and priorities such as safety, durability, and aesthetic
              appeal.
            </p>
            <br />
            <p>
              We make deliberate choices about our product selection,
              techniques, and painting technology based on factors such as
              extreme weather conditions, the specific surface (interior or
              exterior, or specific areas like kitchens, bathrooms, and
              ceilings), and regular usage. This strategy enables us to
              guarantee the paint&apos;s resistance to delicate elements, endure
              daily use, and enhance its longevity.
            </p>
            <br />
            <p>
              We strive to bring out the unique character of each painted
              surface in your home with a team of carefully selected painters
              and a focus on detail.
            </p>
          </div>
          <div className={styles.wedoPaintImage}>
            <img
              src="/images/services/What_We_Do_Painting-2.png"
              alt="What we do"
            />
          </div>
        </div>
      </section>

      <section className={styles.worksPaintSection}>
        <div className={styles.worksPaintContent}>
          <div className={styles.worksPaintImage}>
            <img
              src="/images/services/How-It-Works_Painting-2.jpg"
              alt="How it works"
            />
          </div>
          <div className={styles.worksPaintText}>
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
                  <h3>Analyzing Requirements </h3>
                  <p>
                    First, we listen to all your requirements, like the spaces
                    or rooms that need to be painted, any walls that need
                    special attention from sensitive factors like weather and
                    moisture, or any designer painting demands.{" "}
                  </p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 02</h1>
                  <h3>Selecting Suitable Application Methods </h3>
                  <p>
                    According to the requirements and a thorough look into the
                    walls and spaces, a suitable application method with the
                    right collection of tools, equipment, technology, and
                    products is chosen. This is where we do our cost estimation.{" "}
                  </p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 03</h1>
                  <h3>Choosing Colours</h3>
                  <p>
                    Then we choose the right colours to bring out the look or
                    style you need. We can also do a colour analysis to help you
                    choose colours that best compliments your interior and
                    leaves them looking fresh and spacious.{" "}
                  </p>
                </div>
                <div className={styles.carouselItem}>
                  <h1>Step 04</h1>
                  <h3>Post Inspection</h3>
                  <p>
                    Once the job is done, we do a post-inspection to see if our
                    quality standards are met. Then, we do alterations or extra
                    work if needed or requested to ensure the expected results
                    are produced.{" "}
                  </p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.chPaintSection}>
        <div className={styles.chPaintContent}>
          <div className={styles.chPaintText}>
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
          <div className={styles.chPaintImage}>
            <img
              src="/images/services/why-choose-ac (2).webp"
              alt="Why choose Paint Quality"
            />
          </div>
        </div>
      </section>

      <section className={styles.profSection}>
        <div className={styles.profContent}>
          <div className={styles.profText}>
            <h1>Professional Painting Is An Investment </h1>
            <p>
              Severe weather can lead to the important chemicals in the paint
              deteriorating, changing its texture and hue. Professional painters
              are aware that choosing the right products and painting techniques
              for each surface in your residential or commercial property is
              crucial for improved sustainability.
            </p>
            <br />
            <p>
              Our products are sourced at wholesale prices and the savings are
              passed on to you. We possess the necessary tools and skills to
              provide top-notch finishes. Selecting colors based on your
              home&apos;s specific lighting can also contribute to reducing
              energy costs. Light hues help lower air conditioning costs during
              warm months, while darker shades trap heat from sunlight during
              cold months, decreasing heating expenses. Thoughtful color choices
              can also improve the appearance of your natural light. Are you
              prepared to proceed with your investment?
            </p>
            <br />
          </div>
          <div className={styles.profImage}>
            <img
              src="/images/services/Facts_Painting-1.webp"
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
            {paintingfaq.map((item) => (
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

export default Painting;
