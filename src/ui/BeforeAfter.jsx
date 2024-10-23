import styles from "./BeforeAfter.module.css";
import Carousel from "./Carousel";

function BeforeAfter() {
  return (
    <section className={styles.beforeAfter}>
      <div className="sectionStyles">
        <h2>Before & After</h2>
        <Carousel>
          {Array.from({ length: 7 }, (_, i) => (
            <div className={styles.beforeAfterContainer} key={i}>
              <div className={styles.beforeAfterItem}>
                <div className="imgContainer">
                  <img src={`/images/before-after/before-${i + 1}.jpg`} />
                </div>
                <div className="imgContainer">
                  <img src={`/images/before-after/after-${i + 1}.jpg`} />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default BeforeAfter;
