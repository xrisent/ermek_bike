import './ContactsSection.scss';
import Link from 'next/link';
import telegramIcon from '../../../media/icons8-telegram.svg'
import whatsappIcon from '../../../media/icons8-whatsapp.svg'
import instagramIcon from '../../../media/icons8-instagram.svg'
import locationImg from '../../../media/PXL_20250218_054139935~2.jpg'

export default function ContactsSection() {
    return (
        <section className="contactsSection">
            <div className="contacts__container">
                <div className="contactsSection__box">

                    <div className="contactsSection__box__left">
                        <h2 className='c__box__left__name'>Контакты</h2>

                        <div className="c__box__left__list">
                            <div className="c__box__left__list1">
                                <p className='c__box__left__list1__name'>Первомайский район, г. Бишкек, Улица Фатьянова, 10</p>
                                <Link target="_blank" href={'https://go.2gis.com/i5b46'} ><p className='c__box__left__list1__text'>Ссылка на адрес </p></Link>
                            </div>

                            <div className="c__box__left__list__en">
                                <p className='c__box__left__list__email'>ermek.baigazzakov@gmail.com</p>
                                <p className='c__box__left__list__number'>+996700735803</p>
                            </div>

                            <div className="c__box__left__list__imgs">
                                <Link target="_blank" href={'https://t.me/lytrlmb'}><img className='c__box__left__list__img' src={telegramIcon.src} alt="telegram link" /></Link>
                                <Link target="_blank" href={'https://wa.me/qr/ZP3OTCHFQE7NI1'}><img className='c__box__left__list__img' src={whatsappIcon.src} alt="whatsapp link" /></Link>
                                <Link target="_blank" href={'https://www.instagram.com/bikefit.kg?igsh=enh3ejI3djNrMzN3'}><img className='c__box__left__list__img' src={instagramIcon.src} alt="instagram link" /></Link>
                            </div>

                        </div>

                    </div>

                    <img className='contactsSection__box__right' src={locationImg.src} alt="" />
                </div>
            </div>
        </section>
    )
}



{/* <div className="contactsSection__box__content">
                        <h2>Контакты</h2>
                        <ul>
                            <li>
                                <p>Фрунзенская набережная 54, Москва.</p>
                                <Link href={'https://youtube.com'}><p>Яндекс.Навигатор по запросу Bikefit.ru </p></Link>
                            </li>
                            <li>
                                <p>Фрунзенская набережная 54, Москва.</p>
                                <Link href={'https://youtube.com'}><p>Яндекс.Навигатор по запросу Bikefit.ru </p></Link>
                            </li>
                            <li>
                                <p>Фрунзенская набережная 54, Москва.</p>
                                <Link href={'https://youtube.com'}><p>Яндекс.Навигатор по запросу Bikefit.ru </p></Link>
                            </li>
                        </ul>
                        <div className="contacts__p">
                            <p>ermek.baigazzakov@gmail.com</p>
                            <p>+99999999</p>
                        </div>
                        <div className="contacts__imgs">
                            <Link href={''}><img src={telegramIcon.src} alt="telegram link" /></Link>
                            <Link href={''}><img src={whatsappIcon.src} alt="whatsapp link" /></Link>
                            <Link href={''}><img src={instagramIcon.src} alt="instagram link" /></Link>
                        </div>
                    </div>
                    <img src="https://static.wixstatic.com/media/fb88d0_56d9b78b678345dda61b355f724610e8~mv2.jpg/v1/fill/w_816,h_810,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fb88d0_56d9b78b678345dda61b355f724610e8~mv2.jpg" alt="" /> */}