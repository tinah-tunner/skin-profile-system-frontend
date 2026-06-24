import { useEffect, useState } from "react";
import "./calendar.css";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [bookings, setBookings] = useState([]);

  const API_URL = "http://localhost:8080/api/bookings";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error("Error loading bookings:", err));
  }, [currentDate]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthName = currentDate.toLocaleString("default", {
    month: "long",
  });

  const changeMonth = (step) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + step);
    setCurrentDate(newDate);
  };

  const getBookingsForDate = (dateStr) => {
    return bookings.filter((b) => b.bookingDate === dateStr);
  };

  const renderDays = () => {
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="empty"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(
        day
      ).padStart(2, "0")}`;

      const dayBookings = getBookingsForDate(dateStr);

      let className = "day available";

      if (dayBookings.length === 1) className = "day light";
      else if (dayBookings.length === 2) className = "day medium";
      else if (dayBookings.length > 2) className = "day full";

      days.push(
        <div
          key={day}
          className={className}
          onClick={() =>
            alert(`Date: ${dateStr}\nBookings: ${dayBookings.length}`)
          }
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar-wrapper">

      <div className="calendar-header">
        <button onClick={() => changeMonth(-1)}>⬅</button>

        <h2>
          {monthName} {year}
        </h2>

        <button onClick={() => changeMonth(1)}>➡</button>
      </div>

      <div className="calendar-grid">{renderDays()}</div>

    </div>
  );
}

export default Calendar;