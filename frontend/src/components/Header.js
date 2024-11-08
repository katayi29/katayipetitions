import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <header className="header" onClick={goToHome}>
      <h1 className="header-title">Petitions Platform</h1>
    </header>
  );
}

export default Header;
