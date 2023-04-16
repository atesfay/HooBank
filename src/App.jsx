import styles from "./style";
import { Navbar, Hero } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <div>Stats</div>
        <div>Business</div>
        <div>Billing</div>
        <div>CardDeal</div>
        <div>Testimonials</div>
        <div>Clients</div>
        <div>CTA</div>
        <div>Footer</div>
      </div>
    </div>
  </div>
);

export default App;
