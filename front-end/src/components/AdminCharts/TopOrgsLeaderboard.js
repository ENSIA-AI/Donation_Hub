import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
} from "recharts";

export default function TopOrgsLeaderboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/top-organizations")

      .then((res) => {
        console.log("API response:", res.data); // <- check what you get
        const chartData = res.data.map((org) => ({
          org_name: org.org_name,
          posts: org.campaigns_count,
        }));
        setData(chartData);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: 240,
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
        Top 6 Active Organizations
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 10, bottom: 20 }}
        >
          <XAxis type="number" />
          <YAxis
            type="category"
            dataKey="org_name"
            width={100}
            tick={{ fontSize: 14 }}
          />
          <Tooltip formatter={(value) => [`${value} campaigns`, "Activity"]} />
          <Bar dataKey="posts" fill="#e66610" radius={[0, 10, 10, 0]}>
            <LabelList dataKey="posts" position="right" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
