import Link from "next/link";
import './Footer.scss';
import telegramIcon from '../../../media/icons8-telegram.svg'
import whatsappIcon from '../../../media/icons8-whatsapp.svg'
import instagramIcon from '../../../media/icons8-instagram.svg'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer__box">
                    <div className="contacts__imgs">
                        <Link href={''}><img src={telegramIcon.src} alt="telegram link" /></Link>
                        <Link href={''}><img src={whatsappIcon.src} alt="whatsapp link" /></Link>
                        <Link href={''}><img src={instagramIcon.src} alt="instagram link" /></Link>
                    </div>
                    <p>©2019 by bikefit.ru</p>
                    <p>ИП Бородавкин Александр Юрьевич, ИНН</p>
                    <p>772793438118, ОГРНИП</p>
                    <p>321774600201982</p>
                </div>
            </div>
        </footer>
    );
}