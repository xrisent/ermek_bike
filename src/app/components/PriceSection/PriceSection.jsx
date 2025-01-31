import price_bg_img from '../../../media/IMG_5102.jpg'
import './PriceSection.scss'

export default function PriceSection(){
    return (
        <section className='price'>
        <div className="container">
          <div className="price__box">
            <img src={price_bg_img.src} alt="price_bg" />
            <div className="price__box__content">
              <h2>Услуги и цены</h2>
              <ul>
                <li>
                  <h3>Настройка посадки на велосипеде</h3>
                  <p>Подогнать посадку на существующем велосипеде по технологии 3D захвата движения Retül</p>
                  <div className='variables'>
                    <p>2 часа 30 мин</p>
                    <p>17000 руб</p> 
                  </div>
                </li>
                <li>
                  <h3>Подбор велосипеда</h3>
                  <p>Подобрать велосипед одного типа по технологии 3D захвата движения Retül</p>
                  <div className='variables'>
                    <p>2 часа</p>
                    <p>14000 руб</p> 
                  </div>
                </li>
                <li>
                  <h3>Refit</h3>
                  <p>Повторное посещение для подгонки посадки (через период времени или с новым оборудованием) на велосипеде по технологии 3D захвата движения Retül</p>
                  <div className='variables'>
                    <p>1 час 30 мин</p>
                    <p>13500 руб</p> 
                  </div>
                </li>
              </ul>
              <button>Подробнее</button>
            </div>
          </div>
        </div>
      </section>
    )
}