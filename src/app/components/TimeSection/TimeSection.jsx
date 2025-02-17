import Link from 'next/link';
import './TimeSection.scss';

export default function TimeSection() {
    return (
        <>
            <section className='timeSection'>  
                <div className="container">
                    <div className="timeSection__box">
                        <h4>Часы работы студии:</h4>
                        <p>Индивидуальная запись по телефону, онлайн или WhatsApp</p>
                        <p>ВТ-СБ 11:00 - 19:00</p>
                    </div>
                </div>
            </section>
            <section className='bookingSection'>
                <div className="container">
                    <div className="bookingSection__box">
                        <h2>Запись онлайн</h2>
                        <Link href='/book'>Записаться</Link>
                    </div>
                </div>
            </section>
        </>
    )
}