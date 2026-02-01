import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const COLORS = [
  "#09493a",
  "#288f77",
  "#74f4c9",
  "#e66610",
  "#ffb451",
  "#ffd861",
  "#ab833d",
];

export default function CampaignsByCategory() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch campaigns grouped by category
    axios
      .get("http://localhost:8000/api/campaigns-by-category")
      .then((res) => {
        // res.data is an array like [{ category: "Education", campaigns: 5 }, ...]
        setData(res.data);
      })
      .catch((err) => console.error("Failed to fetch campaigns:", err));
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: 320,
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h3
        style={{ textAlign: "center", marginBottom: "0px", fontSize: "1.5rem", fontFamily: "var(--secondary-font)" }}
      >
        Campaigns by Category
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis dataKey="category" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="campaigns" name="Campaigns" minPointSize={5}>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
