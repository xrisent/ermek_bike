'use client';
import { useState, useEffect } from 'react';
import './book.scss';

export default function BookPage() {
  const [services, setServices] = useState([]);
  const [serviceId, setServiceId] = useState('');
  const [clientName, setClientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [startTime, setStartTime] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [bookings, setBookings] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    fetch('/api/services')
      .then((res) => res.json())
      .then(setServices);

    fetch('/api/bookings')
      .then((res) => res.json())
      .then(setBookings);
  }, []);

  const getCurrentDate = () => {
    const bishkekTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Bishkek" }));
    return bishkekTime.toISOString().split("T")[0];
  };

  const generateAvailableTimes = (date, serviceTime) => {
    const times = [
      "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
      "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
      "18:00", "18:30", "19:00", "19:30"
    ];
  
    const bookedTimes = bookings
      .filter((b) => b.startTime.split("T")[0] === date)
      .map((b) => {
        const startTime = new Date(b.startTime); 
        const endTime = new Date(b.endTime);
        return {
          start: startTime.getUTCHours() * 60 + startTime.getUTCMinutes(), 
          end: endTime.getUTCHours() * 60 + endTime.getUTCMinutes(), 
        };
      });
  
    const currentTime = new Date();
    const currentTimeStr = currentTime.getUTCHours() * 60 + currentTime.getUTCMinutes(); 
    const currentDateStr = currentTime.toISOString().split("T")[0];
  
    return times.filter((time) => {
      if (date === currentDateStr) {
        const [hours, minutes] = time.split(":").map(Number);
        const timeInMinutes = hours * 60 + minutes;
        if (timeInMinutes <= currentTimeStr) return false;
      }
  
      const [hours, minutes] = time.split(":").map(Number);
      const startTimeObj = new Date();
      startTimeObj.setUTCHours(hours, minutes, 0);
  
      const endTimeObj = new Date(startTimeObj.getTime() + serviceTime * 60000);
      const endHours = endTimeObj.getUTCHours();
      const endMinutes = endTimeObj.getUTCMinutes();
      const endTimeInMinutes = endHours * 60 + endMinutes;
  
      return !bookedTimes.some(({ start, end }) =>
        (start < endTimeInMinutes && start >= startTimeObj.getUTCHours() * 60 + startTimeObj.getUTCMinutes()) ||
        (end > startTimeObj.getUTCHours() * 60 + startTimeObj.getUTCMinutes() && end <= endTimeInMinutes) ||
        (startTimeObj.getUTCHours() * 60 + startTimeObj.getUTCMinutes() < start && endTimeInMinutes > end)
      );
    });
  };
  

  useEffect(() => {
    if (startTime && serviceId) {
      const date = startTime.split("T")[0];
      const selectedService = services.find(s => s.id == serviceId);
      if (selectedService && serviceId != "null" && startTime != "T10:00") {
        setAvailableTimes(generateAvailableTimes(date, selectedService.time));
      }else if(serviceId === "null" || startTime === "T10:00"){
        setAvailableTimes([]);
      }
    }
  }, [startTime, bookings, serviceId]);

  const handleBooking = async () => {
    try {

      const response = await fetch('/api/bookings', {
        method: 'POST',
        body: JSON.stringify({ clientName, phoneNumber, serviceId, startTime }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        setSuccessMessage('Бронирование успешно создано!');
        setClientName('');
        setStartTime('');
        setPhoneNumber('');
        setServiceId('');
        setAvailableTimes([])
        fetch('/api/bookings') 
          .then((res) => res.json())
          .then(setBookings);
      } else {
        setSuccessMessage('Ошибка при бронировании. Попробуйте снова.');
      }
    } catch {
      setSuccessMessage('Произошла ошибка. Попробуйте позже.');
    }
  };

  useEffect(() => {
    if (availableTimes.length > 0 && startTime.endsWith("T10:00")) {
      setStartTime(startTime.split("T")[0] + "T" + availableTimes[0] + ":00");
    }
  }, [availableTimes]);

  return (
    <main>
      <section className='booking'>
        <div className="container">
          <div className="booking__box">
            <div className="booking__box-header">
              <h1>Запись</h1>
            </div>
            <div className="booking__box-footer">
              <div className="booking__box-footer__left">

              </div>
              <div className="booking__box-footer__right">
                {successMessage && <p>{successMessage}</p>}
                <div className="select-container">
                  <select value={serviceId} onChange={(e) => setServiceId(e.target.value)}>
                    <option value="null">Выберите услугу</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                />
                <input
                  type="tel"
                  placeholder="Ваш номер телефона"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <input
                  type="date"
                  id="datepicker"
                  value={startTime.split("T")[0]}
                  onChange={(e) => setStartTime(e.target.value + "T10:00")}
                  min={getCurrentDate()}
                  onClick={(e) => e.target.showPicker()}
                />
                
                <div className="select-container">
                  <select
                    value={availableTimes.length === 0 ? "" : startTime?.split("T")[1] || ""}
                    onChange={(e) => setStartTime(startTime.split("T")[0] + "T" + e.target.value)}
                    disabled={availableTimes.length === 0}
                  >
                    {availableTimes.length !== 0 ? (
                      availableTimes.map((time) => (
                        <option key={time} value={time + ":00"}>
                          {time}
                        </option>
                      ))
                    ) : (serviceId !== "" && clientName !== "" && phoneNumber !== "" && startTime !== "") ? (
                      <option value="" disabled>
                        На выбранную дату нет доступного времени
                      </option>
                    ) : (
                      <option value="" disabled>
                        Выберите услугу и дату
                      </option>
                    )}
                  </select>
                </div>

                <button onClick={handleBooking} disabled={!serviceId || !clientName || !phoneNumber || !startTime || availableTimes.length === 0}>
                  Забронировать
                </button>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>
    </main>
  );
}
