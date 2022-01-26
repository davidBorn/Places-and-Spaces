import React from "react";
import NextLink from "next/link";
// import { Navigation, LanguageSwitcher } from ".";
import styles from "../styles/Header.module.css";

const Header = ({ menu, altLangs }) => (
    <>
        <header>
            <div className={styles.db_site_margins}>
                <div className={styles.logo_container}>
                    <NextLink href={"/"} passHref>
                        <a>
                            <img
                                className={styles.logo}
                                src="logos/spaces-and-places.svg"
                                alt="Spaces and Places Logo"
                            />
                        </a>
                    </NextLink>
                </div>
                <nav className={styles.menu}>
                    <ul>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#services-and-benefits">
                                Services and Benefits
                            </a>
                        </li>
                        <li>
                            <a href="#Contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
);

export default Header;
