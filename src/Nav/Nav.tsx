import Logo from "../assests/svg/logo";
import styles from "./Nav.module.scss";
import { Button } from "../pages/Home/components/Button/Button";

const Nav = () => {
  const redirectToSignUp = () => (window.location.href = "#/");

  return (
    <nav className={styles.nav}>
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
      <div className="-me-12 min-w-fit">
        <Button onClick={redirectToSignUp} />
      </div>
    </nav>
  );
};

export default Nav;
