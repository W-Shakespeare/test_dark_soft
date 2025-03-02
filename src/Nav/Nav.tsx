import Logo from "../assests/svg/logo";
import styles from "./Nav.module.scss";
import { Button } from "../pages/Home/components/Button/Button";
import classNames from "classnames";

interface IProps {
  isVisible: boolean;
}

const Nav: React.FC<IProps> = ({ isVisible }) => {
  const redirectToSignUp = () => (window.location.href = "#/");

  return (
    <nav
      className={classNames(styles.nav, {
        [styles.isVisible]: !isVisible,
      })}
    >
      <div className={styles.wrapperLogo}>
        <a
          className="focus-visible:ring-4 focus-visible:ring-blue-200/50"
          href="/"
        >
          <Logo />
        </a>
      </div>
      <div>
        <a href="/pricing">Pricing</a>
      </div>
      <div>
        <a href="/login">Log in</a>
      </div>
      <div
        className={classNames(styles.wrapperButton, {
          [styles.isVisible]: !isVisible,
        })}
      >
        <Button onClick={redirectToSignUp} />
      </div>
    </nav>
  );
};

export default Nav;
