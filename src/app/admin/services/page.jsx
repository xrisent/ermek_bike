"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminSideBar from '../components/sidebar/AdminSideBar';
import '../admin.scss';
import './services.scss';

export default function AdminServicesPage() {
  const [services, setServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const itemsPerPage = 5;
  const router = useRouter();

  useEffect(() => {
    fetch('/api/services')
      .then((res) => res.json())
      .then(setServices);
  }, []);

  const sortedServices = [...services].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
    } else if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
    }

    return 0;
  });

  const totalPages = Math.ceil(sortedServices.length / itemsPerPage);
  const currentServices = sortedServices.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const handleRowClick = (id) => {
    router.push(`/admin/services/${id}`);
  };

  return (
    <main>
      <section className='admin__services'>
        <div className="container">
          <div className="admin__services__box">
            <AdminSideBar />
            <div className="admin__services__box-content">
              <table>
                <thead>
                  <tr>
                    <th onClick={() => handleSort('name')}>Название услуги</th>
                    <th>Описание услуги</th>
                    <th onClick={() => handleSort('time')}>Время выполнения</th>
                    <th onClick={() => handleSort('price')}>Цена</th>
                  </tr>
                </thead>
                <tbody>
                  {currentServices.map((service) => (
                    <tr key={service.id} onClick={() => handleRowClick(service.id)} style={{ cursor: 'pointer' }}>
                      <td>{service.name}</td>
                      <td>{service.description.length > 30 ? service.description.slice(0, 30) + '...' : service.description}</td>
                      <td>{service.time}</td>
                      <td>{service.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="pagination__services">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  &laquo;
                </button>
                <span>Страница {currentPage} из {totalPages}</span>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  &raquo;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
