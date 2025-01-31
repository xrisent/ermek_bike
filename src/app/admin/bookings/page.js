"use client";

import { useEffect, useState } from 'react';

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch('/api/bookings')
      .then((res) => res.json())
      .then(setBookings);
  }, []);

  console.log(bookings)

  return (
    <main>
      <h1>Bookings Management</h1>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Created At</th>
            <th>Ends at</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.service.name}</td>
              <td>{booking.clientName}</td>
              <td>{booking.phoneNumber}</td>
              <td>{new Date(booking.startTime).toLocaleString()}</td>
              <td>{new Date(booking.endTime).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
