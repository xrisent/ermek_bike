'use client';

import { useRouter } from 'next/navigation';
import AdminSideBar from '../components/sidebar/AdminSideBar';
import './adminLogout.scss'

export default function AdminLogoutPage() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  };
  
  return (
    <main>
      <section className='admin__logout'>
        <div className="container">
          <div className="admin__logout__box">
            <AdminSideBar/>
            <div className="admin__logout__box-content">
              <h2>Уверены что хотите выйти?</h2>
              <button onClick={handleLogout}>Выйти</button>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  );
}
