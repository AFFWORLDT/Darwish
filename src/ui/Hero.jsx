import styles from "./Hero.module.css";
import CtaBtns from "../ui/CtaBtns";
import { useOutletContext } from "react-router-dom";

function Hero() {
  const intersectionRef = useOutletContext();

  return (
    <section ref={intersectionRef} className={styles.hero}>
      <div className={styles.heroContainer}>
        <span className={styles.subTitle}>LIVE A HEALTHY LIFE</span>

        <h1>
          Creating A{" "}
          <em>
            <strong>Germ-Free</strong>
          </em>{" "}
          Environment
        </h1>

        <CtaBtns />

        <div className={styles.heroFeatures}>
          {heroFeaturesData.map((item) => (
            <div className={styles.featureItem} key={item.name}>
              <div>
                <img src={item.imgUrl} />
              </div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const heroFeaturesData = [
  {
    name: "Duct Cleaning",
    imgUrl: "icons/hero/feature-1.png",
  },
  {
    name: "Annual Maintenance Contracts",
    imgUrl: "icons/hero/feature-2.png",
  },
  {
    name: "Water Proofing Services",
    imgUrl: "icons/hero/feature-3.png",
  },
  {
    name: "Maintenance Services",
    imgUrl: "icons/hero/feature-4.png",
  },
  {
    name: "Specialized Services",
    imgUrl: "icons/hero/feature-5.png",
  },
];

export default Hero;
