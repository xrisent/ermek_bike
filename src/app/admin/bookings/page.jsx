"use client";

import { useEffect, useState } from 'react';
import AdminSideBar from '../components/sidebar/AdminSideBar';
import '../admin.scss';
import './bookings.scss';

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState([]);
  const [startTime, setStartTime] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const itemsPerPage = 6;

  useEffect(() => {
    fetch('/api/bookings')
      .then((res) => res.json())
      .then(setBookings);
  }, []);

  const filteredBookings = bookings.filter(booking => {
    if (!startTime) return true;
    const bookingDate = new Date(booking.startTime).toISOString().split('T')[0];
    return bookingDate === startTime;
  });

  const sortedBookings = [...filteredBookings].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sortedBookings.length / itemsPerPage);
  const currentBookings = sortedBookings.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleDateChange = (e) => {
    setStartTime(e.target.value);
    setCurrentPage(1);
  };

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  return (
    <main>
      <section className='admin__bookings'>
        <div className="container">
          <div className="admin__bookings__box">
            <AdminSideBar />
            <div className="admin__bookings__box-content">
              <div className="admin__bookings__box-content__header">
                <input
                  type="date"
                  id="datepicker"
                  value={startTime}
                  onChange={handleDateChange}
                  onClick={(e) => e.target.showPicker()}
                />
              </div>

              <table>
                <thead>
                  <tr>
                    <th onClick={() => handleSort('service.name')}>Услуга</th>
                    <th onClick={() => handleSort('clientName')}>Имя</th>
                    {/* <th onClick={() => handleSort('phoneNumber')}>Номер телефона</th> */}
                    <th onClick={() => handleSort('startTime')}>Начало</th>
                    <th onClick={() => handleSort('endTime')}>Конец</th>
                  </tr>
                </thead>
                <tbody>
                  {currentBookings.map((booking) => (
                    <tr key={booking.id}>
                      <td>{booking.service.name}</td>
                      <td>{booking.clientName} <br /> {booking.phoneNumber}</td>
                      {/* <td>{booking.phoneNumber}</td> */}
                      <td>{new Date(booking.startTime).toISOString().slice(5, 16).replace('T', ' ')}</td>
                      <td>{new Date(booking.endTime).toISOString().slice(5, 16).replace('T', ' ')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="pagination__bookings">
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
