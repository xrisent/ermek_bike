'use client'

import dynamic from 'next/dynamic';
import Link from 'next/link';
import './contacts.scss';
import telegramIcon from '../../media/icons8-telegram.svg'
import whatsappIcon from '../../media/icons8-whatsapp.svg'
import instagramIcon from '../../media/icons8-instagram.svg'

const MapComponent = dynamic(() => import('./MapComponent'), { 
  ssr: false 
});

export default function ContactPage() {
    return (
      <main>
        <section className="contacts">
          <div className="container">
            <div className="contacts__box">
              <h1>Контакты и адрес</h1>
              <div className="contacts__box-bottom">
                <div className="contacts__box-bottom__left">
                  <p>Адрес: г. Бишкек, улица Фатьянова, 10</p>
                  <p>Телефон: +996 700 735 803</p>
                  <p>Почта: ermek.baigazzakov@gmail.com</p>
                  <div className="contacts__imgs">
                    <Link target="_blank" href={'https://t.me/lytrlmb'}><img src={telegramIcon.src} alt="telegram link" /></Link>
                    <Link target="_blank" href={'https://wa.me/qr/ZP3OTCHFQE7NI1'}><img src={whatsappIcon.src} alt="whatsapp link" /></Link>
                    <Link target="_blank" href={'https://www.instagram.com/bikefit.kg?igsh=enh3ejI3djNrMzN3'}><img src={instagramIcon.src} alt="instagram link" /></Link>
                  </div>
                </div>
                <div className="contacts__box-bottom__right">
                  <MapComponent />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
