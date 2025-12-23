import React, { useState, useEffect } from "react";

function SearchBar({ onSearch, categories = [] }) {
  const [name, setName] = useState("");
  const [wilaya, setWilaya] = useState("");
  const [category, setCategory] = useState("");
  const [wilayas, setWilayas] = useState([]);
  const [filteredWilayas, setFilteredWilayas] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/api/wilayas")
      .then((res) => res.json())
      .then((data) => setWilayas(data))
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    if (onSearch) {
      onSearch({ name, wilaya, category });
    }
  }, [name, wilaya, category]);

  return (
    <div className="search_org flex-row">
      {/* Organization Name */}
      <div
        className="search_by_org_name"
        style={{
          position: "relative",
          display: "inline-block",
          maxWidth: "500px",
        }}
      >
        <i
          className="fa-solid fa-magnifying-glass"
          style={{
            position: "absolute",
            left: "10px",
            top: "50%",
            fontSize: "1.5rem",
            transform: "translateY(-50%)",
            color: "#403f3f",
          }}
        ></i>
        <input
          type="text"
          placeholder="Search organization..."
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          style={{ paddingLeft: "35px", boxSizing: "border-box" }}
        />
      </div>

      {/* Wilaya (search box) */}
      <div className="search_by_wilaya">
        <input
          type="text"
          placeholder="Choose wilaya..."
          value={wilaya}
          onChange={(e) => setWilaya(e.target.value)}
          list="wilayas-list"
        />

        <datalist id="wilayas-list">
          {wilayas.map((w) => (
            <option key={w.id} value={w.wilaya_name} />
          ))}
        </datalist>
      </div>

      {/* Category (dropdown) */}
      <div className="filter_org_category">
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="">All categories</option>
          {categories.length ? (
            categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))
          ) : (
            <>
              <option value="1">Education</option>
              <option value="2">Health</option>
              <option value="3">Charity / Humanitarian</option>
              <option value="4">Environment</option>
              <option value="5">Technology</option>
              <option value="6">Culture & Arts</option>
              <option value="7">Sports & Youth</option>
            </>
          )}
        </select>
      </div>
    </div>
  );
}

export default SearchBar;
