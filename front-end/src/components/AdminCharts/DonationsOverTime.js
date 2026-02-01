import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

export default function DonationsOverTime() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/donations-over-time")
      .then((res) => {
        // Option 1 returns simple data: [{date: "2025-01-15", count: 5}, ...]
        const chartData = res.data.map((item) => ({
          date: item.date,
          "Donations Received": item.count, // rename 'count' to readable label
        }));

        setData(chartData);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load donations data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div
        style={{
          width: "100%",
          height: 280,
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          padding: "10px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>Loading chart...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          width: "100%",
          height: 280,
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          padding: "10px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ color: "red" }}>{error}</p>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        height: 280,
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          marginBottom: "10px",
          fontSize: "1.4rem",
        }}
      >
        Received Donations Over Time
      </h3>

      <ResponsiveContainer width="100%" height="85%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip formatter={(value) => `${value} donations`} />
          <Legend verticalAlign="top" height={36} />
          <Area
            type="monotone"
            dataKey="Donations Received"
            stroke="#1c7d6a"
            fill="#85dfcd"
            isAnimationActive={true}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
