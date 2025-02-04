"use client"

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import '../../admin.scss';
import AdminSideBar from '../../components/sidebar/AdminSideBar';

export default function SingleService() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [time, setTime] = useState('');

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchService = async () => {
        try {
          const response = await fetch(`/api/services/${id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch service data');
          }
          const data = await response.json();
          setName(data.name);
          setDescription(data.description);
          setPrice(data.price);
          setTime(data.time);
        } catch (error) {
          console.error("Error:", error.message);
        }
      };

      fetchService();
    }
  }, [id]); 

  const handleUpdateService = async () => {
    if (name && description && price && time) {
      try {
        const response = await fetch(`/api/services/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            description,
            time,
            price,
          }),
        });

        if (!response.ok) {
          console.log(response)
          throw new Error('Failed to update service');
        }

        const data = await response.json();
        console.log("Service updated:", data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <main>
      <section className='admin'>
        <div className="container">
          <div className="admin__box">
            <AdminSideBar />
            <div className="admin__box-content">
              <h2>Изменить услугу</h2>
              <input
                type="text"
                placeholder="Название услуги"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <textarea
                placeholder="Описание услуги"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <input
                type="number"
                placeholder="Время (в минутах)"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
              <input
                type="number"
                placeholder="Цена"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <button onClick={handleUpdateService}>Обновить услугу</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
