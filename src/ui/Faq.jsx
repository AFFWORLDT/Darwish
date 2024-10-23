import { useState } from "react";
import styles from "./Faq.module.css";
import Wave from "./Wave";
import { FAQS } from "../utils/faqData";

function Faq() {
  const [activeFaq, setActiveFaq] = useState(null);

  function handleToggle(id) {
    if (activeFaq === id) return setActiveFaq(null);
    setActiveFaq(id);
  }

  return (
    <section className={styles.faq}>
      <div className="sectionStyles">
        <h2>
          Commonly Asked{" "}
          <em>
            <strong>Questions</strong>
          </em>
        </h2>

        <div className={styles.faqContainer}>
          {FAQS.map((item) => (
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
  );
}

export default Faq;
