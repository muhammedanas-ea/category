"use client";

import { useState } from "react";
import "./header.css";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container">
      <nav>
        <div className="logo">
          <div className="menu-icon" onClick={toggleMenu}>
            <Image
              src="/images/icons/Group 48100065.png"
              alt="menu-icon"
              width={16}
              height={13}
            />
          </div>
          <Image
            className="logo-icon"
            src="/images/Vector.png"
            alt="logo"
            width={35}
            height={35}
          />
        </div>

        <h1 className="logo-text">LOGO</h1>

        <div className="nav-icons">
          <a href="#">
            <Image
              src="/images/icons/search-normal.png"
              alt="search-icon"
              width={22}
              height={22}
            />
          </a>
          <a href="#">
            <Image
              src="/images/icons/heart.png"
              alt="heart-icon"
              width={22}
              height={22}
            />
          </a>
          <a href="#">
            <Image
              src="/images/icons/shopping-bag.png"
              alt="shopping-bag-icon"
              width={22}
              height={22}
            />
          </a>
          <a className="hidden" href="#">
            <Image
              src="/images/icons/profile.png"
              alt="profile-icon"
              width={22}
              height={22}
            />
          </a>
          <a className="lang-container hidden" href="#">
            ENG
            <IoIosArrowDown />
          </a>
        </div>
      </nav>

      {isMenuOpen && (
        <ul className="nav-links mobile">
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Stories</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      )}

      <ul className="nav-links desktop">
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Stories</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
