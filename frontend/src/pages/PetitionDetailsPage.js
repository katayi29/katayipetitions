import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function PetitionDetailsPage() {
  const { id } = useParams();
  const [petition, setPetition] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(""); // success or error

  useEffect(() => {
    axios
      .get(`http://localhost:8080/petitions/${id}`)
      .then((response) => {
        setPetition(response.data);
      })
      .catch((error) => {
        console.error(error);
        setMessage("Error fetching petition details");
        setMessageType("error");
      });
  }, [id]);

  const handleSign = () => {
    if (!name || !email) {
      setMessage("Please enter your name and email to sign the petition.");
      setMessageType("error");
      return;
    }

    const signature = { name, email };

    axios
      .post(`http://localhost:8080/petitions/${id}/sign`, signature)
      .then((response) => {
        setMessage("Signed successfully!");
        setMessageType("success");
        setName("");
        setEmail("");
      })
      .catch((error) => {
        console.error(error);
        setMessage("Error signing petition");
        setMessageType("error");
      });
  };

  if (!petition) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="container">
      <h1>{petition.title}</h1>
      <p>{petition.description}</p>
      <h3>Creator: {petition.creator}</h3>

      <h4>Sign this Petition</h4>
      {message && (
        <div
          className={`message ${
            messageType === "success" ? "success" : "error"
          }`}
        >
          {message}
        </div>
      )}
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="input"
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="input"
      />
      <button onClick={handleSign} className="button">
        Sign Petition
      </button>
    </div>
  );
}

export default PetitionDetailsPage;
