import useMetaTags from "../hooks/useMetaTags";
import GetQuoteForm from "../ui/GetQuoteForm";
import Wave from "../ui/Wave";
import styles from "./Contact.module.css";

function Contact() {
  useMetaTags(
    'Contact Us | Repairing Dubai',
    'Get in touch with DRepairing Dubai for all your cleaning and maintenance needs in Dubai. Contact us for quotes, inquiries, or more information about our professional services.',
    'contact DRepairing Dubai,Dubai cleaning services contact'
  )
  return (
    <>
      <section className={styles.banner}>
        <h1>
          Contact{" "}
          <em>
            <strong>Us</strong>
          </em>
        </h1>
      </section>

      <section className={styles.contact}>
        <div className="sectionStyles">
          <p>
            Speak to our team today to receive a complimentary consultation - we
            will respond within 24 hours.
          </p>

          <div className={styles.contactContainer}>
            <div className={styles.getInTouch}>
              <h2>
                Get In{" "}
                <em>
                  <strong>Touch</strong>
                </em>
              </h2>
              <div className={styles.contactItem}>
                <img src="/icons/contact-location.png" />
                <div>
                  {/* <span>P.O. Box 123456,</span>
                  <span>ABCD Tower,</span> */}
                  <span> Dubai, UAE</span>
                </div>
              </div>
              <div className={styles.contactItem}>
                <img src="/icons/contact-email.png" />
                <div>
                  <span>
                    <strong>Write to Us</strong>
                  </span>
                  <a href="mailto: info@repairingdubai.com">
                  info@repairingdubai.com
                  </a>
                  <a href="mailto: Darwishhvac@gmail.com">
                  Darwishhvac@gmail.com
                  </a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <img src="/icons/contact-phone.png" />
                <div>
                  <span>
                    <strong>Call Us</strong>
                  </span>
                  <a href="tel:+971567599006"> +971 56 759 9006</a>
                  <a href="tel:+971564304054"> +971 56 430 4054</a>
                </div>
              </div>
            </div>

            <GetQuoteForm />
          </div>
        </div>

        <Wave />
      </section>
    </>
  );
}

export default Contact;
