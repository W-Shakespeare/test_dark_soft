// import { DesignTeams } from "../../../App";
import Airbnb from "../../../assests/svg/Airbnb";
import Arrow from "../../../assests/svg/Arrow";
import Metalab from "../../../assests/svg/Metalab";
import Pinterest from "../../../assests/svg/Pinterest";
import Revolut from "../../../assests/svg/Revolut";
import Uber from "../../../assests/svg/Uber";
import { Button } from "./Button/Button";
import styles from "./Design.module.scss";

export const Design = () => {
  const redirectToSignUp = () => (window.location.href = "#/");

  return (
    <section className={styles.designWrapper}>
      <div>Слайдер</div>
      <div className={styles.design}>
        <h1>Discover real-world design inspiration.</h1>
        <p className={styles.designText}>
          Featuring over 300,000 screens and 1,000 iOS, Android &amp; Web apps
          <span> — New content weekly</span>.
        </p>
        <div className={styles.wrapperBtns}>
          <div className={styles.btns}>
            <Button onClick={redirectToSignUp} />

            <button className={styles.plansBtn}>
              <span className="truncate">See our plans</span>
              <div className={styles.wrapperArrow}>
                <Arrow />
              </div>
            </button>
          </div>
        </div>
      </div>
      <DesignTeams />
    </section>
  );
};

export const DesignTeams = () => {
  return (
    <div className={styles.designTeamsWrapper}>
      <div className={styles.text}>Trusted by design teams at</div>
      <div className={styles.designTeams}>
        <Uber />
        <Airbnb />
        <Revolut />
        <Metalab />
        <Pinterest />
      </div>
    </div>
  );
};
