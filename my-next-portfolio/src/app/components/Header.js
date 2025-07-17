// Header.js - No changes from your last provided JS
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "../styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"; // For solid icons
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"; // For brand icons

const Header = () => {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isActive = (path) => pathname === path;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          {"@"}Ansh{"."}Sharma
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link
              href="/skills"
              className={isActive("/skills") ? styles.active : ""}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="/certificates"
              className={isActive("/certificates") ? styles.active : ""}
            >
              Certificates
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={isActive("/projects") ? styles.active : ""}
            >
              Projects
            </Link>
          </li>
          <li
            className={styles["dropdown-container"]}
            onMouseEnter={() => setIsDropdownOpen(true)} // Set to true on entering the entire container
            onMouseLeave={() => setIsDropdownOpen(false)} // Set to false on leaving the entire container
          >
            <Link
              href=" "
              className={isActive("/contact") ? styles.active : ""}
              // Keep onClick if you want click behavior on mobile or as an alternative
              onClick={toggleDropdown}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              Contact
            </Link>
            <ul
              className={`${styles["dropdown-menu"]} ${
                isDropdownOpen ? styles.show : ""
              }`}
            >
              <li>
                <Link
                  href="mailto:ansharma013@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className={styles.dropdownIcon}
                  />
                  Email
                </Link>
              </li>
              <li>
                <Link href="tel:+918668866137">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className={styles.dropdownIcon}
                  />
                  Phone
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com/in/ansharma013/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className={styles.dropdownIcon}
                  />
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/Ichibu013"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className={styles.dropdownIcon}
                  />
                  GitHub
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
