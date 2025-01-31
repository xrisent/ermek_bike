'use client'

import Link from 'next/link';
import './contacts.scss';
import telegramIcon from '../../media/icons8-telegram.svg'
import whatsappIcon from '../../media/icons8-whatsapp.svg'
import instagramIcon from '../../media/icons8-instagram.svg'

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
                  <p>Телефон: +996 555 555 555</p>
                  <p>Почта: ermekchmo@mail.ru</p>
                  <div className="contacts__imgs">
                    <Link href={''}><img src={telegramIcon.src} alt="telegram link" /></Link>
                    <Link href={''}><img src={whatsappIcon.src} alt="whatsapp link" /></Link>
                    <Link href={''}><img src={instagramIcon.src} alt="instagram link" /></Link>
                  </div>
                </div>
                <div className="contacts__box-bottom__right">
                  <iframe
                    src="http://widgets.2gis.com/widget?type=firmsonmap&options=%7B%22pos%22%3A%7B%22lat%22%3A42.85952164290271%2C%22lon%22%3A74.60700631141664%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22bishkek%22%7D%2C%22org%22%3A%2270000001087443887%22%7D"
                    width="90%"
                    height="90%"
                    style={{ border: "1px solid #a3a3a3", boxSizing: "border-box" }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }