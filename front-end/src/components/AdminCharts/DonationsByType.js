import { useEffect, useState } from "react";
import axios from "axios";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const COLORS = ["#fdda6f", "#e66610", "#3aac7e"];

export default function DonationsByType() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/donations/by-type").then((res) => {
      const apiData = res.data;

      setData([
        { name: "Money", value: apiData.money },
        { name: "Food", value: apiData.food },
        { name: "Medicine", value: apiData.medicine },
      ]);
    });
  }, []);

  if (data.length === 0) return null;

  return (
    <div
      style={{
        width: "100%",
        height: 300,
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          marginBottom: "0px",
          fontSize: "1.5rem",
          fontFamily: "var(--secondary-font)",
        }}
      >
        Donations By Type
      </h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend verticalAlign="bottom" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
