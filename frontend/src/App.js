import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import ViewAllPetitionsPage from "./pages/ViewAllPetitionsPage";
import CreatePetitionPage from "./pages/CreatePetitionPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ViewAllPetitionsPage />} />
        <Route path="/create" element={<CreatePetitionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
