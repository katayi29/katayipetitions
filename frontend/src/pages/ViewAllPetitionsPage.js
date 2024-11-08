import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewAllPetitionsPage() {
  const [petitions, setPetitions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/petitions")
      .then((response) => {
        console.log(response.data);
        setPetitions(response.data);
      })
      .catch((error) => {
        console.error(error);
        alert("Error fetching petitions");
      });
  }, []);

  return (
    <div className="container">
      <h1>All Petitions</h1>
      <ul className="petition-list">
        {petitions.map((petition) => (
          <li key={petition.id} className="petition-item">
            <Link to={`/petitions/${petition.id}`} className="petition-link">
              {petition.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="navigation-buttons">
        <button className="button">
          <Link to="/create" className="button-link">
            Create Petition
          </Link>
        </button>
        <button className="button">
          <Link to="/petitions/search" className="button-link">
            Search Petitions
          </Link>
        </button>
      </div>
    </div>
  );
}

export default ViewAllPetitionsPage;
