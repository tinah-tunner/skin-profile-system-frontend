import { useMemo, useState } from "react";

function BookingCalendar({ bookings, onSelectDate }) {
  const [currentMonth] = useState(new Date());

  // GET DAYS IN MONTH
  const days = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const date = new Date(year, month, 1);
    const result = [];

    while (date.getMonth() === month) {
      result.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return result;
  }, [currentMonth]);

  // COUNT BOOKINGS PER DAY
  const getCount = (day) => {
    const d = day.toISOString().split("T")[0];
    return bookings.filter((b) => b.date === d).length;
  };

  return (
    <div style={styles.grid}>
      {days.map((day) => {
        const count = getCount(day);

        return (
          <div
            key={day.toString()}
            onClick={() => onSelectDate(day.toISOString().split("T")[0])}
            style={styles.cell}
          >
            <div style={styles.date}>
              {day.getDate()}
            </div>

            {count > 0 && (
              <div style={styles.badge}>
                {count} booking(s)
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "10px",
    marginTop: "20px",
  },

  cell: {
    background: "white",
    padding: "10px",
    borderRadius: "10px",
    cursor: "pointer",
    minHeight: "70px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    borderLeft: "4px solid #ff7a18",
  },

  date: {
    fontWeight: "bold",
    color: "#ff7a18",
  },

  badge: {
    marginTop: "5px",
    fontSize: "12px",
    background: "#ff7a18",
    color: "white",
    padding: "2px 6px",
    borderRadius: "20px",
    display: "inline-block",
  },
};

export default BookingCalendar;