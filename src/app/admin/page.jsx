"use client";

import { useState } from 'react';
import './admin.scss'
import AdminSideBar from './components/sidebar/AdminSideBar';

export default function AdminPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [time, setTime] = useState('');

  const handleAddService = async () => {
    if(name || description || price || time) {
        try {
            const response = await fetch('/api/services', {
                method: 'POST',
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
                throw new Error('Failed to create service');
            }
        
            const data = await response.json();
            console.log("Service created:", data);
        } catch (error) {
        console.error("Error:", error.message);
        }
    }else{
        alert("Please fill all the fields");
    }
  };
  
  return (
    <main>
      <section className='admin'>
        <div className="container">
          <div className="admin__box">
            <AdminSideBar/>
            <div className="admin__box-content">
              <h2>Создать услугу</h2>
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
              <button onClick={handleAddService}>Создать услугу</button>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}
