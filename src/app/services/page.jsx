"use client";

import { useEffect, useState } from 'react';
import './services.scss';

export default function ServicesPage() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/api/services')
      .then((res) => res.json())
      .then(setServices);
  }, []);

  return (
    <main>
      <section className='services'>
        <div className="container">
          <div className="services__box">
            <h1>Наши услуги</h1>
            <ul>
              {services.map((service) => (
                <li key={service.id} id={service.id}>
                  <h2>{service.name}</h2>
                  <p>{service.description}</p>
                  <p>{Math.floor(service.time / 60)} ч {service.time % 60} мин | {service.price} сом</p>
                </li>
              ))}
              
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
