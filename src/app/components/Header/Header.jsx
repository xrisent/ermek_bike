"use client"

import Link from "next/link";
import './Header.scss';
import { useEffect, useState } from "react";

export default function Header() {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const handleNavClick = () => {
        setIsNavVisible(!isNavVisible);
    }

    useEffect(() => {
        if (isNavVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isNavVisible]);


    return (
        <header>
            <div className="container">
                <div className="header__box">
                    <ul>
                        <li>ermekchmo@gmail.com</li>
                        <li>+0000000</li>
                        <li>+0000000</li>
                    </ul>
                    <div className="links">
                        <div className="whatsapp">whatsapp</div>
                    </div>
                </div>
                <button onClick={handleNavClick} className="nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav className={isNavVisible ? "visible" : ""}>
                    <Link href="/">Главная</Link>
                    <Link href="/services">Сервисы и услуги</Link>
                    <Link href="/book">Бронирование</Link>
                    <Link href="/contacts">Контакты</Link>
                </nav>
            </div>
        </header>
    );
}