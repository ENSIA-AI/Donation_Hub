import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const TopWilayasDonations = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/donations-top-wilayas")
      .then((res) => setData(res.data))
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
        Top 6 Wilayas by Donations
      </h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="wilaya_name" />
          <YAxis />
          <Tooltip formatter={(value) => `${value} DZD`} />
          <Bar dataKey="total" fill="#288f77" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopWilayasDonations;
