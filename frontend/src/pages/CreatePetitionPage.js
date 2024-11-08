import React, { useState } from "react";
import axios from "axios";

function CreatePetitionPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [creator, setCreator] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const petition = { title, description, creator };
    axios
      .post("http://localhost:8080/petitions", petition)
      .then((response) => {
        console.log(response.data);
        alert("Petition created successfully!");
      })
      .catch((error) => {
        console.error(error);
        alert("Error creating petition");
      });
  };

  return (
    <div className="container">
      <h1>Create Petition</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="input"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="textarea"
        />
        <input
          type="text"
          placeholder="Creator"
          value={creator}
          onChange={(e) => setCreator(e.target.value)}
          required
          className="input"
        />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreatePetitionPage;
