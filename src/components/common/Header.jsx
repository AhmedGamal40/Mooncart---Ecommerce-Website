import { useEffect, useRef, useState } from "react";
import LogoImg from "../../assets/common/logo.png";
import { menulists } from "../../assets/data/data.js";
import { Badges, CustomLink, CustomNavLink } from "./CustomComponents.jsx";
import {
  IoSearchOutline,
  IoCartOutline,
  IoHeartOutline,
} from "react-icons/io5";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useLocation } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // closs Menu if click
  const clossMenuOutSide = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // handel scroll with animation
  const handelScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    document.addEventListener("mousedown", clossMenuOutSide);
    window.addEventListener("scroll", handelScroll);

    return () => {
      document.removeEventListener("mousedown", clossMenuOutSide);
      window.removeEventListener("scroll", handelScroll);
    };
  });

  const isHomePage = location.pathname === "/";
  return (
    <>
      <header
        className={
          isHomePage
            ? `header px-12 py-3 bg-white-100 relative z-20 ${
                isScrolled ? "scrolled" : ""
              }`
            : `header px-12 py-3 relative z-20 ${isScrolled ? "scrolled" : ""}`
        }
      >
        {isHomePage && (
          <div
            className={`${
              isScrolled ? "lg:bg-none" : "lg:bg-black"
            } lg:h-[88px] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:-z-10`}
          ></div>
        )}
        <nav className="p-4 flex justify-between items-center relative">
          <div className="flex items-center gap-14">
            <div>
              <img src={LogoImg} alt="LogoImg" className="md:h-7 h-5" />
            </div>
            <div className="hidden lg:flex items-center justify-between gap-8">
              {menulists.map((list) => (
                <li key={list.id} className="uppercase list-none">
                  <CustomNavLink href={list.path}>{list.link}</CustomNavLink>
                </li>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-8 icons">
            <div className="uppercase hidden lg:block text-inherit relative z-20">
              <CustomLink
                className={`${
                  isScrolled || !isHomePage ? "text-gray-400" : "text-white"
                }`}
              >
                Login
              </CustomLink>
              <span
                className={`${
                  isScrolled || !isHomePage ? "text-gray-400" : "text-white"
                }`}
              >
                /
              </span>
              <CustomLink
                className={`${
                  isScrolled || !isHomePage ? "text-gray-400" : "text-white"
                }`}
              >
                Register
              </CustomLink>
            </div>
            <div
              className={`icon flex items-center justify-center gap-6 ${
                isScrolled || !isHomePage ? "text-gray-400" : "text-white"
              }`}
            >
              <IoSearchOutline size={23} />

              <div className="relative z-20">
                <IoHeartOutline size={23} />
                <div className="absolute -top-2 -right-1 5">
                  <Badges color="bg-primary-green">0</Badges>
                </div>
              </div>

              <div className="relative z-20">
                <IoCartOutline size={23} />
                <div className="absolute -top-2 -right-1 5">
                  <Badges color="bg-primary-green">0</Badges>
                </div>
              </div>

              <button
                onClick={toggleMenu}
                className="lg:hidden w-10 h-10 flex justify-center items-center bg-black text-white"
              >
                {isOpen ? (
                  <AiOutlineClose size={24} />
                ) : (
                  <AiOutlineMenu size={24} />
                )}
              </button>
            </div>
          </div>

          {/* Responsive Menu */}
          <div
            ref={menuRef}
            className={`lg:flex lg:items-center lg:w-auto w-full p-5 absolute ring-0 top-full menu-container ${
              isOpen ? "open" : "closed"
            }`}
          >
            {menulists.map((list) => (
              <li key={list.id} className="uppercase list-none">
                <CustomNavLink href={list.path} className="text-white">
                  {list.link}
                </CustomNavLink>
              </li>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
