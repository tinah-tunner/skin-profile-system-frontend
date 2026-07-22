// src/components/clientFile/ProgressChart.jsx

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  YAxis,
} from "recharts";

export default function ProgressChart({
  consultations,
}) {
  const data = consultations.map(
    (c, index) => ({
      visit: index + 1,
      date: c.consultationDate,
      treatments: index + 1,
    })
  );

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>
        Treatment Progress
      </h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >
        <LineChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis dataKey="visit" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="treatments"
            stroke="#ff6b35"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    borderRadius: 20,
    padding: 25,
    marginTop: 25,
    border: "2px solid #ffe3d7",
  },

  title: {
    color: "#ff6b35",
    marginBottom: 20,
  },
};