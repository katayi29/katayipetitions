import React, { useState } from "react";
import axios from "axios";

function SearchPetitionsPage() {
  const [keyword, setKeyword] = useState("");
  const [petitions, setPetitions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    setNoResults(false);
    axios
      .get(`http://localhost:8080/petitions/search?keyword=${keyword}`)
      .then((response) => {
        setPetitions(response.data);
        setNoResults(response.data.length === 0);
      })
      .catch((error) => {
        console.error(error);
        alert("There was an error retrieving the petitions. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="container">
      <h1>Search Petitions</h1>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Enter search keyword"
        className="input"
      />
      <button onClick={handleSearch} className="button" disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>

      {noResults && (
        <p className="no-results-message">
          No petitions found matching your search criteria.
        </p>
      )}

      <ul className="petition-list">
        {petitions.map((petition) => (
          <li key={petition.id} className="petition-item">
            <a href={`/petitions/${petition.id}`} className="petition-link">
              {petition.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchPetitionsPage;
