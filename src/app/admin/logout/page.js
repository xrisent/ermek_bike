'use client';
import { useRouter } from 'next/navigation';

export default function AdminLayout({ children }) {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  return (
    <main>
      <nav>
        <a href="/admin">Dashboard</a>
        <a href="/admin/bookings">Bookings</a>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      {children}
    </main>
  );
}
