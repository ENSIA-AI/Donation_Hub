import React, { useState, useEffect } from "react";

function SearchBarPosts({ onSearch }) {
  const [name, setName] = useState("");
  const [wilaya, setWilaya] = useState("");
  const [category, setCategory] = useState("");
  const [wilayas, setWilayas] = useState([]);
  const [categories, setCategories] = useState([]);
  const [Suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/wilayas")
      .then((res) => res.json())
      .then((data) => setWilayas(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (name.length < 2) {
      setSuggestions([]);
      return;
    }

    fetch(`http://localhost:8000/api/compaigns/autocomplete?q=${name}`)
      .then((res) => res.json())
      .then((data) => setSuggestions(data))
      .catch(console.error);
  }, [name]);

  // In SearchBar
  useEffect(() => {
    if (onSearch) {
      const selectedWilayaId =
        wilayas.find((w) => w.wilaya_name === wilaya)?.id || "";
      onSearch({ name, wilaya_id: selectedWilayaId, category_id: category });
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
          placeholder="Search compaign..."
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          style={{ paddingLeft: "35px", boxSizing: "border-box" }}
        />
        {Suggestions.length > 0 && (
          <ul className="autocomplete-list">
            {Suggestions.map((post, index) => (
              <li
                key={index}
                onClick={() => {
                  setName(post);
                  setSuggestions([]);
                }}
              >
                {post}
              </li>
            ))}
          </ul>
        )}
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
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All categories</option>
          {categories.length ? (
            categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.category}
              </option>
            ))
          ) : (
            <option disabled>Loading categories...</option>
          )}
        </select>
      </div>
    </div>
  );
}

export default SearchBarPosts;
