"use client";

import { useState } from 'react';

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
      <h1>Admin Panel</h1>
      <input
        type="text"
        placeholder="Service Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Service time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAddService}>Add Service</button>
    </main>
  );
}
