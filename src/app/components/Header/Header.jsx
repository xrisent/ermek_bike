import Link from "next/link";
import './Header.scss';

export default function Header() {
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
                <nav>
                    <Link href="/">Главная</Link>
                    <Link href="/services">Сервисы</Link>
                    <Link href="/book">Бронирование</Link>
                    <Link href="/contacts">Контакты</Link>
                    <Link href="/admin">Админ</Link>
                    <Link href="/admin/bookings">Записи</Link>
                </nav>
            </div>
        </header>
    );
}