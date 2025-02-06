"use client"

import Link from "next/link";
import './Header.scss';
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import throttle from "lodash/throttle";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleNavClick = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = "hidden";
          document.documentElement.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
          document.documentElement.style.overflow = "auto";
        }
        return () => {
          document.body.style.overflow = "auto";
          document.documentElement.style.overflow = "auto";
        };
    }, [isOpen])



    useEffect(()=>{
        const headScroll = throttle(() => {
            setScrolled(window.scrollY > 100);
        }, 200);
        window.addEventListener('scroll', headScroll);
        return () => window.removeEventListener('scroll', headScroll);
    }, []);


    return (
        <header className="header">
            <div className="container">
                <motion.div 
                className="header__box"
                initial={{ opacity: 1 }}
                animate={{ opacity: scrolled ? 0 : 1, y: scrolled ? -20 : 0 }}
                transition={{ duration: 0.3 }}>

                    <div className="header__top">
                        <ul className="h__top__list">
                            <li className="h__top__list__li">ermekchmo@gmail.com</li>
                            <li className="h__top__list__li">+996706030725</li>
                            <li className="h__top__list__li">+996555030725</li>
                        </ul>
                        <p className="h__top__whatsapp">Whatsapp</p>
                    </div>

                    <div className="header__box__line"></div>

                    <div className="header__bottom">
                        <h3 className="header__bottom__name">Bikefit</h3>
                        <nav className="header__bottom__nav">
                            <ul className="h__bottom__nav__page">
                                <li className="h__bottom__nav__page__li">Главная</li>
                                <li className="h__bottom__nav__page__li">Сервисы и услуги</li>
                                <li className="h__bottom__nav__page__li">Бронирование</li>
                                <li className="h__bottom__nav__page__li">Контакты</li>
                            </ul>
                        </nav>
                    </div>

                </motion.div>

                {scrolled && (
                <motion.div 
                className="header__scrolled"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: scrolled ? 0 : -100, opacity: scrolled ? 1 : 0 }}
                transition={{ duration: 0.3 }}>
                    <div className="header__bottom">
                        <nav className="header__bottom__nav">
                            <ul className="h__bottom__nav__page">
                                <li className="h__bottom__nav__page__li">Главная</li>
                                <li className="h__bottom__nav__page__li">Сервисы и услуги</li>
                                <li className="h__bottom__nav__page__li">Бронирование</li>
                                <li className="h__bottom__nav__page__li">Контакты</li>
                            </ul>
                        </nav>
                    </div>
                </motion.div>
                )}

                <div className="header__mobile">

                    <h3 className="header__bottom__name">Bikefit</h3>

                    <div className={`h__mobile__burger ${isOpen ? "open" : ""}`} onClick={handleNavClick}></div>
                    
                    <motion.nav
                      className="header__mobile__nav-box"
                      animate={isOpen ? { right: 0, opacity: 1 } : { right: "-100%", opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <ul>
                        <li><a href="#">Главная</a></li>
                        <li><a href="#">О нас</a></li>
                        <li><a href="#">Контакты</a></li>
                      </ul>
                    </motion.nav>
                </div>

            </div>
        </header>
    );
}


{/* <div className="header__box">
                    <ul>
                        <li>ermekchmo@gmail.com</li>
                        <li>+996706030725</li>
                        <li>+996555030725</li>
                    </ul>
                    <div className="links">
                        <div className="whatsapp">whatsapp</div>
                    </div>
                </div> */}
                {/* <button onClick={handleNavClick} className="nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button> */}
                {/* <nav className={isNavVisible ? "visible" : ""}>
                    <Link href="/">Главная</Link>
                    <Link href="/services">Сервисы и услуги</Link>
                    <Link href="/book">Бронирование</Link>
                    <Link href="/contacts">Контакты</Link>
                </nav> */}