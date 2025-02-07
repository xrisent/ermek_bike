'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminSideBar from '../components/sidebar/AdminSideBar';
import './adminLogin.scss'

export default function AdminLoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault(); 

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      router.push('/admin');
    } else {
      setError('Invalid credentials');
    }
  };
  
  return (
    <main>
      <section className='admin__login'>
        <div className="container">
          <div className="admin__login__box">
            {/* <AdminSideBar/> */}
            <div className="admin__login__box-content">
              <h2>Вход</h2>
              {error && <p>{error}</p>}
              <form onSubmit={handleLogin}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="submit">Войти</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}
