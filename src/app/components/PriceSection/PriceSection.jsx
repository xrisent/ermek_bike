import price_bg_img from './PriceSectionIMG/IMG_5102.jpg'
import './PriceSection.scss'

export default function PriceSection(){
    return (
        <section className='price'>
            <div className="price__container">
               <div className="price__box">

                   <img className='price__img' src={price_bg_img.src} alt="price_bg" />

                   <div className="price__content">

                      <h2 className='price__content__name'>Услуги и цены</h2>

                      <div className="p__content__box">

                          <div className="p__content__variables">
                              <h3 className='p__content__variables__name'>Настройка посадки на велосипеде</h3>
                              <p className='p__content__variables__text'>Подогнать посадку на существующем велосипеде по технологии 3D захвата движения Retül</p>
                              <div className='p__c__variables__work'>
                                <p className='p__c__variables__work__time'>2 часа 30 мин</p>
                                <p className='p__c__variables__work__price'>17000 руб</p> 
                              </div>
                          </div>
    
                          <div className="p__content__variables2">
                              <h3 className='p__content__variables2__name'>Подбор велосипеда</h3>
                              <p className='p__content__variables2__text'>Подобрать велосипед одного типа по технологии 3D захвата движения Retül</p>
                              <div className='p__c__variables2__work'>
                                <p className='p__c__variables2__work__time'>2 часа</p>
                                <p className='p__c__variables2__work__price'>14000 руб</p> 
                              </div>
                          </div>
    
                          <div className="p__content__variables3">
                              <h3 className='p__content__variables3__name'>Refit</h3>
                              <p className='p__content__variables3__text'>Повторное посещение для подгонки посадки (через период времени или с новым оборудованием) на велосипеде по технологии 3D захвата движения Retül</p>
                              <div className='p__c__variables3__work'>
                                <p className='p__c__variables3__work__time'>1 час 30 мин</p>
                                <p className='p__c__variables3__work__price'>13500 руб</p> 
                              </div>
                          </div>

                      </div>

                   </div>
               </div>

               <div className="price__button">
                  <button className='price__btn'>Подробнее</button>
               </div>

            </div>
        </section>
    )
}



{/* <div className="price__box">
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
          </div> */}