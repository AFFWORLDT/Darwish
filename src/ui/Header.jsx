import { useState } from "react";
import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import useBrowserWidth from "../hooks/useBrowserWidth";
import ServicesDesktop from "./ServicesDesktop";
import ServicesMobile from "./ServicesMobile";
import CtaBtns from "./CtaBtns";
import Modal from "./Modal";
import GetQuoteForm from "./GetQuoteForm";

function Header({ hasAppScrolled }) {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  const browserWidth = useBrowserWidth();

  function handleNav() {
    if (isHamburgerActive) setIsHamburgerActive(false);
  }

  return (
    <header
      className={`${styles.header} ${isHamburgerActive ? styles.hamburgerActive : ""} ${hasAppScrolled ? styles.scrolled : ""}`}
    >
      <nav className={styles.nav}>
        <Link to="/" onClick={handleNav}>
          <img className={styles.logo} src="/Logo_Dubai_.png" />
        </Link>

        {browserWidth > 1000 ? (
          <NavDesktop handleNav={handleNav} />
        ) : (
          <NavMobile handleNav={handleNav} />
        )}

        <div
          onClick={() => setIsHamburgerActive(!isHamburgerActive)}
          className={styles.menuHamburger}
        >
          <span></span>
        </div>
      </nav>
    </header>
  );
}

function NavDesktop({ handleNav }) {
  const [isServicesActive, setIsServicesActive] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  function handleFormOpen() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsFormOpen(true);
  }

  return (
    <>
      <div className={styles.navItemsDesktop}>
        <ul>
          <li>
            <NavLink onClick={handleNav} to="/about-us">
              About Us
            </NavLink>
          </li>
          <li>
            <button onClick={() => setIsServicesActive(true)}>
              Our Services
            </button>
          </li>
          <li>
            <NavLink onClick={handleNav} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>

        <button onClick={handleFormOpen} className={styles.btnQuote}>
          Get a Free Quote
        </button>
        {isFormOpen && (
          <Modal close={() => setIsFormOpen(false)}>
            <GetQuoteForm close={() => setIsFormOpen(false)} />
          </Modal>
        )}
      </div>

      <ServicesDesktop
        isServicesActive={isServicesActive}
        setIsServicesActive={setIsServicesActive}
      />
    </>
  );
}

function NavMobile({ handleNav }) {
  return (
    <div className={styles.navItemsMobile}>
      <ServicesMobile handleNav={handleNav} />

      <ul>
        <li>
          <NavLink onClick={handleNav} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleNav} to="/about-us">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleNav} to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>

      <CtaBtns btnTelephoneColor="#f7f7f7" center={true} />
    </div>
  );
}

export default Header;
